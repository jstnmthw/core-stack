import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(userDto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(userDto.password, 10);
    const user = this.usersRepository.create({
      ...userDto,
      password: hashedPassword,
    });

    return this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id: id });
  }

  async findByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({ where: { email } });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
