import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { IsNameUniqueConstraint } from './validators/is-name-unique';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  providers: [RolesService, IsNameUniqueConstraint],
  controllers: [RolesController],
  exports: [RolesService],
})
export class RolesModule {}
