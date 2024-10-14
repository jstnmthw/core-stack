import {
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  @IsAlphanumeric()
  name: string | null;

  @IsOptional()
  @IsAlphanumeric()
  nickname: string | null;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
