import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    const isPassSame = await bcrypt.compare(pass, user.password);

    console.log('isPassSame', isPassSame);

    if (user && isPassSame) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }
}
