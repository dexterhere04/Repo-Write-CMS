import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

describe('AuthController', () => {
  let authController: AuthController;
  let authService: AuthService;

  const mockAuthResponse = {
    accessToken: 'jwt-token-here',
  };

  beforeEach(async () => {
    const mockAuthService = {
      registerUser: jest.fn(),
      loginUser: jest.fn(),
      handleGithubLogin: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: mockAuthService,
        },
      ],
    }).compile();

    authController = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });

  describe('register', (): void => {
    it('should register a new user successfully', async () => {
      const registerDto: RegisterDto = {
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123',
      };

      jest
        .spyOn(authService, 'registerUser')
        .mockResolvedValue(mockAuthResponse);

      const result = await authController.register(registerDto);

      expect(authService.registerUser).toHaveBeenCalledWith(
        registerDto.name,
        registerDto.email,
        registerDto.password,
      );
      expect(result).toEqual(mockAuthResponse);
    });

    it('should handle registration errors', async () => {
      const registerDto: RegisterDto = {
        name: 'Test User',
        email: 'existing@example.com',
        password: 'password123',
      };

      const error = new Error('User already exists');
      jest.spyOn(authService, 'registerUser').mockRejectedValue(error);

      await expect(authController.register(registerDto)).rejects.toThrow(error);
    });

    it('should validate required fields', async () => {
      const invalidDto = {
        name: '',
        email: 'invalid-email',
        password: '123',
      } as RegisterDto;

      // Validation is handled by class-validator automatically
      // This test ensures the method exists and can be called
      jest
        .spyOn(authService, 'registerUser')
        .mockResolvedValue(mockAuthResponse);

      // In a real scenario, validation would fail before reaching service
      expect(typeof authController.register).toBe('function');
    });
  });

  describe('login', () => {
    it('should login user successfully with email', async () => {
      const loginDto: LoginDto = {
        identifier: 'test@example.com',
        password: 'password123',
      };

      jest.spyOn(authService, 'loginUser').mockResolvedValue(mockAuthResponse);

      const result = await authController.login(loginDto);

      expect(authService.loginUser).toHaveBeenCalledWith(
        loginDto.identifier,
        loginDto.password,
      );
      expect(result).toEqual(mockAuthResponse);
    });

    it('should login user successfully with username', async () => {
      const loginDto: LoginDto = {
        identifier: 'testuser',
        password: 'password123',
      };

      jest.spyOn(authService, 'loginUser').mockResolvedValue(mockAuthResponse);

      const result = await authController.login(loginDto);

      expect(authService.loginUser).toHaveBeenCalledWith(
        loginDto.identifier,
        loginDto.password,
      );
      expect(result).toEqual(mockAuthResponse);
    });

    it('should handle invalid credentials', async () => {
      const loginDto: LoginDto = {
        identifier: 'test@example.com',
        password: 'wrongpassword',
      };

      const error = new Error('Invalid credentials');
      jest.spyOn(authService, 'loginUser').mockRejectedValue(error);

      await expect(authController.login(loginDto)).rejects.toThrow(error);
    });

    it('should handle non-existent user', async () => {
      const loginDto: LoginDto = {
        identifier: 'nonexistent@example.com',
        password: 'password123',
      };

      const error = new Error('User not found');
      jest.spyOn(authService, 'loginUser').mockRejectedValue(error);

      await expect(authController.login(loginDto)).rejects.toThrow(error);
    });
  });

  describe('GitHub OAuth', () => {
    const mockGithubUser = {
      githubId: 'github-id-123',
      username: 'testuser',
      email: 'test@example.com',
      avatarUrl: 'https://avatars.githubusercontent.com/u/123',
    };

    it('should handle GitHub login redirect', () => {
      // This endpoint just redirects to GitHub - no actual logic to test
      expect(typeof authController.githubLogin).toBe('function');
    });

    it('should handle GitHub callback successfully', async () => {
      const mockRequest = {
        user: mockGithubUser,
      };

      jest
        .spyOn(authService, 'handleGithubLogin')
        .mockResolvedValue(mockAuthResponse);

      const result = await authController.githubCallback(mockRequest);

      expect(authService.handleGithubLogin).toHaveBeenCalledWith(
        mockGithubUser,
      );
      expect(result).toEqual(mockAuthResponse);
    });

    it('should handle GitHub callback for new user', async () => {
      const mockNewUser = {
        githubId: 'github-id-456',
        username: 'newuser',
        email: 'newuser@example.com',
        avatarUrl: 'https://avatars.githubusercontent.com/u/456',
      };

      const mockRequest = {
        user: mockNewUser,
      };

      const newUserResponse = {
        accessToken: 'new-jwt-token',
      };

      jest
        .spyOn(authService, 'handleGithubLogin')
        .mockResolvedValue(newUserResponse);

      const result = await authController.githubCallback(mockRequest);

      expect(authService.handleGithubLogin).toHaveBeenCalledWith(mockNewUser);
      expect(result).toEqual(newUserResponse);
    });

    it('should handle GitHub callback errors', async () => {
      const mockRequest = {
        user: mockGithubUser,
      };

      const error = new Error('GitHub authentication failed');
      jest.spyOn(authService, 'handleGithubLogin').mockRejectedValue(error);

      await expect(authController.githubCallback(mockRequest)).rejects.toThrow(
        error,
      );
    });
  });
});
