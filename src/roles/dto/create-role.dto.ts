import { IsNotEmpty } from 'class-validator';
import { IsNameUnique } from '../validators/is-name-unique';

export class CreateRoleDto {
  @IsNameUnique()
  @IsNotEmpty()
  name: string;
}
