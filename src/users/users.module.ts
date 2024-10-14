import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';
import { IsEmailUniqueConstraint } from './validators/is-email-unique';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService, IsEmailUniqueConstraint],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
