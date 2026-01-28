/* eslint-disable @typescript-eslint/unbound-method */
import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UnauthorizedException } from '@nestjs/common';

// Mock bcrypt at the top level
jest.mock('bcrypt', () => ({
  hash: jest.fn().mockResolvedValue('hashed-password'),
  compare: jest.fn().mockResolvedValue(true),
}));

describe('AuthService', () => {
  let service: AuthService;
  let prismaService: jest.Mocked<PrismaService>;
  let jwtService: jest.Mocked<JwtService>;

  beforeEach(async () => {
    const mockPrismaService = {
      user: {
        create: jest.fn(),
        findFirst: jest.fn(),
      },
      $transaction: jest.fn(),
    };

    const mockJwtService = {
      sign: jest.fn().mockReturnValue('test-token'),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
        {
          provide: JwtService,
          useValue: mockJwtService,
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    prismaService = module.get(PrismaService) as jest.Mocked<PrismaService>;
    jwtService = module.get(JwtService) as jest.Mocked<JwtService>;

    // Reset mocks
    jest.clearAllMocks();
    (bcrypt.hash as jest.Mock).mockResolvedValue('hashed-password');
    (bcrypt.compare as jest.Mock).mockResolvedValue(true);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('registerUser', () => {
    it('should register a new user with hashed password', async () => {
      const userData = {
        id: 'user-id',
        name: 'Test User',
        email: 'test@example.com',
        passwordHash: 'hashed-password',
        avatarUrl: null,
        isActive: true,
        lastLoginAt: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      };

      (prismaService.user.create as jest.Mock).mockResolvedValue(userData);

      const result = await service.registerUser(
        'Test User',
        'test@example.com',
        'password123',
      );

      expect(bcrypt.hash).toHaveBeenCalledWith('password123', 12);
      expect(prismaService.user.create).toHaveBeenCalledWith({
        data: {
          name: 'Test User',
          email: 'test@example.com',
          passwordHash: 'hashed-password',
        },
      });
      expect(jwtService.sign).toHaveBeenCalledWith({ sub: 'user-id' });
      expect(result).toEqual({ accessToken: 'test-token' });
    });

    it('should handle database errors during registration', async () => {
      (prismaService.user.create as jest.Mock).mockRejectedValue(
        new Error('Database error'),
      );

      await expect(
        service.registerUser('Test', 'test@example.com', 'password'),
      ).rejects.toThrow('Database error');
    });
  });

  describe('validateUser', () => {
    it('should validate user with correct credentials using email', async () => {
      const mockUser = {
        id: 'user-id',
        name: 'Test User',
        email: 'test@example.com',
        passwordHash: 'hashed-password',
        avatarUrl: null,
        isActive: true,
        lastLoginAt: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      };

      (prismaService.user.findFirst as jest.Mock).mockResolvedValue(mockUser);
      (bcrypt.compare as jest.Mock).mockResolvedValue(true);

      const result = await service.validateUser(
        'test@example.com',
        'password123',
      );

      expect(prismaService.user.findFirst).toHaveBeenCalledWith({
        where: {
          OR: [{ name: 'test@example.com' }, { email: 'test@example.com' }],
        },
      });
      expect(bcrypt.compare).toHaveBeenCalledWith(
        'password123',
        'hashed-password',
      );
      expect(result).toEqual(mockUser);
    });

    it('should validate user with correct credentials using username', async () => {
      const mockUser = {
        id: 'user-id',
        name: 'testuser',
        email: 'test@example.com',
        passwordHash: 'hashed-password',
        avatarUrl: null,
        isActive: true,
        lastLoginAt: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      };

      (prismaService.user.findFirst as jest.Mock).mockResolvedValue(mockUser);
      (bcrypt.compare as jest.Mock).mockResolvedValue(true);

      const result = await service.validateUser('testuser', 'password123');

      expect(prismaService.user.findFirst).toHaveBeenCalledWith({
        where: {
          OR: [{ name: 'testuser' }, { email: 'testuser' }],
        },
      });
      expect(result).toEqual(mockUser);
    });

    it('should throw UnauthorizedException for non-existent user', async () => {
      (prismaService.user.findFirst as jest.Mock).mockResolvedValue(null);

      await expect(
        service.validateUser('nonexistent@example.com', 'password'),
      ).rejects.toThrow(UnauthorizedException);
      await expect(
        service.validateUser('nonexistent@example.com', 'password'),
      ).rejects.toThrow('Invalid credentials');
    });

    it('should throw UnauthorizedException for user without password hash (OAuth user)', async () => {
      const mockUser = {
        id: 'user-id',
        name: 'Test User',
        email: 'test@example.com',
        passwordHash: null,
        avatarUrl: null,
        isActive: true,
        lastLoginAt: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      };

      (prismaService.user.findFirst as jest.Mock).mockResolvedValue(mockUser);

      await expect(
        service.validateUser('test@example.com', 'password'),
      ).rejects.toThrow(UnauthorizedException);
    });

    it('should throw UnauthorizedException for incorrect password', async () => {
      const mockUser = {
        id: 'user-id',
        name: 'Test User',
        email: 'test@example.com',
        passwordHash: 'hashed-password',
        avatarUrl: null,
        isActive: true,
        lastLoginAt: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      };

      (prismaService.user.findFirst as jest.Mock).mockResolvedValue(mockUser);
      (bcrypt.compare as jest.Mock).mockResolvedValue(false);

      await expect(
        service.validateUser('test@example.com', 'wrongpassword'),
      ).rejects.toThrow(UnauthorizedException);
    });
  });

  describe('loginUser', () => {
    it('should login user and return JWT token', async () => {
      const mockUser = {
        id: 'user-id',
        name: 'Test User',
        email: 'test@example.com',
        passwordHash: 'hashed-password',
        avatarUrl: null,
        isActive: true,
        lastLoginAt: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      };

      jest.spyOn(service, 'validateUser').mockResolvedValue(mockUser as any);

      const result = await service.loginUser('test@example.com', 'password123');

      expect(service.validateUser).toHaveBeenCalledWith(
        'test@example.com',
        'password123',
      );
      expect(jwtService.sign).toHaveBeenCalledWith({ sub: 'user-id' });
      expect(result).toEqual({ accessToken: 'test-token' });
    });

    it('should propagate validation errors', async () => {
      jest
        .spyOn(service, 'validateUser')
        .mockRejectedValue(new UnauthorizedException('Invalid credentials'));

      await expect(
        service.loginUser('test@example.com', 'wrongpassword'),
      ).rejects.toThrow(UnauthorizedException);
    });
  });

  describe('createJWT', () => {
    it('should create JWT with user ID', () => {
      const result = service.createJWT('user-id');

      expect(jwtService.sign).toHaveBeenCalledWith({ sub: 'user-id' });
      expect(result).toEqual({ accessToken: 'test-token' });
    });
  });

  describe('handleGithubLogin', () => {
    const githubProfile = {
      githubId: 'github-123',
      username: 'testuser',
      email: 'test@example.com',
      avatarUrl: 'https://avatars.githubusercontent.com/u/123',
    };

    it('should login existing GitHub user', async () => {
      const existingUser = {
        id: 'user-id',
        name: 'Test User',
        email: 'test@example.com',
        passwordHash: null,
        avatarUrl: null,
        isActive: true,
        lastLoginAt: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      };

      (prismaService.user.findFirst as jest.Mock).mockResolvedValue(
        existingUser,
      );

      const result = await service.handleGithubLogin(githubProfile);

      expect(prismaService.user.findFirst).toHaveBeenCalledWith({
        where: {
          oauthAccounts: {
            some: {
              provider: 'github',
              providerId: 'github-123',
            },
          },
        },
      });
      expect(jwtService.sign).toHaveBeenCalledWith({ sub: 'user-id' });
      expect(result).toEqual({ accessToken: 'test-token' });
    });

    it('should register new GitHub user with email', async () => {
      const newUser = {
        id: 'new-user-id',
        name: 'testuser',
        email: 'test@example.com',
        passwordHash: null,
        avatarUrl: 'https://avatars.githubusercontent.com/u/123',
        isActive: true,
        lastLoginAt: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      };

      (prismaService.user.findFirst as jest.Mock)
        .mockResolvedValueOnce(null)
        .mockResolvedValueOnce(newUser);
      (prismaService.user.create as jest.Mock).mockResolvedValue(newUser);

      const result = await service.handleGithubLogin(githubProfile);

      expect(prismaService.user.create).toHaveBeenCalledWith({
        data: {
          name: 'testuser',
          email: 'test@example.com',
          avatarUrl: 'https://avatars.githubusercontent.com/u/123',
          oauthAccounts: {
            create: {
              provider: 'github',
              providerId: 'github-123',
            },
          },
        },
      });
      expect(jwtService.sign).toHaveBeenCalledWith({ sub: 'new-user-id' });
      expect(result).toEqual({ accessToken: 'test-token' });
    });

    it('should throw UnauthorizedException for GitHub user without email', async () => {
      const profileWithoutEmail = {
        ...githubProfile,
        email: undefined,
      };

      (prismaService.user.findFirst as jest.Mock).mockResolvedValue(null);

      await expect(
        service.handleGithubLogin(profileWithoutEmail),
      ).rejects.toThrow(UnauthorizedException);
      await expect(
        service.handleGithubLogin(profileWithoutEmail),
      ).rejects.toThrow('Email is required for GitHub registration');
    });

    it('should handle database errors during GitHub registration', async () => {
      (prismaService.user.findFirst as jest.Mock).mockResolvedValue(null);
      (prismaService.user.create as jest.Mock).mockRejectedValue(
        new Error('Database error'),
      );

      await expect(service.handleGithubLogin(githubProfile)).rejects.toThrow(
        'Database error',
      );
    });
  });

  describe('integration tests', () => {
    it('should handle full registration and login flow', async () => {
      const userData = {
        id: 'user-id',
        name: 'Test User',
        email: 'test@example.com',
        passwordHash: 'hashed-password',
        avatarUrl: null,
        isActive: true,
        lastLoginAt: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      };

      // Registration
      (prismaService.user.create as jest.Mock).mockResolvedValue(userData);
      const registerResult = await service.registerUser(
        'Test User',
        'test@example.com',
        'password123',
      );

      expect(registerResult).toEqual({ accessToken: 'test-token' });

      // Login
      (prismaService.user.findFirst as jest.Mock).mockResolvedValue(userData);
      (bcrypt.compare as jest.Mock).mockResolvedValue(true);
      const loginResult = await service.loginUser(
        'test@example.com',
        'password123',
      );

      expect(loginResult).toEqual({ accessToken: 'test-token' });
      expect(bcrypt.compare).toHaveBeenCalledWith(
        'password123',
        'hashed-password',
      );
    });
  });
});
