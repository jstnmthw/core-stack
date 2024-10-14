import {
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { IsEmailUnique } from '../validators/is-email-unique.decorator';

export class CreateUserDto {
  @IsOptional()
  @IsAlphanumeric()
  name: string | null;

  @IsOptional()
  @IsAlphanumeric()
  nickname: string | null;

  @IsEmailUnique()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
