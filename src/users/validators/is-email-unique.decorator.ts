import { registerDecorator, ValidationOptions } from 'class-validator';
import { IsEmailUniqueConstraint } from './is-email-unique.constraint'; // Adjust the import path as necessary

export function IsEmailUnique(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsEmailUniqueConstraint,
    });
  };
}
