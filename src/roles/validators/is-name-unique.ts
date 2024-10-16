import { Injectable } from '@nestjs/common';
import { RolesService } from '../roles.service';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';

@ValidatorConstraint({ async: true })
@Injectable()
export class IsNameUniqueConstraint implements ValidatorConstraintInterface {
  constructor(protected readonly rolesService: RolesService) {}

  async validate(name: string) {
    const role = await this.rolesService.findByName(name);
    if (role) return false;
  }

  defaultMessage() {
    return 'Name already exists.';
  }
}

export function IsNameUnique() {
  return function (object: any, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: { message: 'Name already exists.' },
      constraints: [],
      validator: IsNameUniqueConstraint,
    });
  };
}
