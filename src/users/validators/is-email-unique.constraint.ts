import { Injectable } from '@nestjs/common';
import { UsersService } from '../users.service';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: true })
@Injectable()
export class IsEmailUniqueConstraint implements ValidatorConstraintInterface {
  constructor(private readonly usersService: UsersService) {}

  async validate(email: string) {
    const user = await this.usersService.findByEmail(email);
    return !user; // Return true if email is not found, meaning it's unique
  }

  defaultMessage() {
    return 'Email $value is already in use';
  }
}
