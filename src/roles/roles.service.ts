import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private readonly rolesRepository: Repository<Role>,
  ) {}

  async create(createRoleDto: CreateRoleDto) {
    return this.rolesRepository.save(createRoleDto);
  }

  async findAll() {
    return this.rolesRepository.find();
  }

  async findOne(id: number) {
    return this.rolesRepository.findOne({ where: { id } });
  }

  async findByName(name: string) {
    const res = await this.rolesRepository.findOne({ where: { name } });
    console.log(res);
    return res;
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    return this.rolesRepository.update(id, updateRoleDto);
  }

  async remove(id: number) {
    return this.rolesRepository.delete(id);
  }
}
