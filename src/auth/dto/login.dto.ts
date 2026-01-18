import { IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsString()
  @MinLength(3)
  identifier: string; // can be username or email

  @IsString()
  @MinLength(6)
  password: string;
}
