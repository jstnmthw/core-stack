import { User } from 'src/users/entities/user.entity';
import { Column, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // @ManyToMany(() => User, (user) => user.roles)
  // users: User[];
}
