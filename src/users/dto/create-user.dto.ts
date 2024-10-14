import { IsEmailUnique } from '../validators/is-email-unique.decorator';
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

  @IsEmailUnique()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
