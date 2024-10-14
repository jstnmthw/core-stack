import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  nickname: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  seen: Date;

  @Column({ default: () => 'CURRENT_TIMESTAMP', nullable: true })
  createdAt: Date;

  @Column({ default: () => 'CURRENT_TIMESTAMP', nullable: true })
  updatedAt: Date;

  @Column({ nullable: true })
  deletedAt: Date;
}
