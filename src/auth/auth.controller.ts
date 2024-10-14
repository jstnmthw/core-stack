import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { User } from 'src/users/user.entity';

interface UserRequest extends Request {
  user: User;
}

@Controller('auth')
export class AuthController {
  constructor() {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: UserRequest) {
    return { message: 'Login', user: req.user, userEmail: req.user.email };
  }
}
