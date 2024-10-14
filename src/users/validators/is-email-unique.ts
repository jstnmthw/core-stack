import { Injectable } from '@nestjs/common';
import { UsersService } from '../users.service';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: true })
@Injectable()
export class IsEmailUniqueConstraint implements ValidatorConstraintInterface {
  constructor(protected readonly usersService: UsersService) {}

  async validate(email: string) {
    const user = await this.usersService.findByEmail(email);
    if (user) return false;
    return true;
  }

  defaultMessage() {
    return 'User with email $value already exists';
  }
}

export function IsEmailUnique(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsEmailUniqueConstraint,
    });
  };
}
