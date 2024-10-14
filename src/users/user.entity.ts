import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum UserStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  BANNED = 'banned',
  USER_DELETED = 'user-deleted',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  nickname: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ nullable: true })
  password: string;

  @Column({ type: 'enum', enum: UserStatus, default: UserStatus.ACTIVE })
  status: UserStatus;

  @Column({ nullable: true })
  seen: Date;

  @Column({ default: () => 'CURRENT_TIMESTAMP', nullable: true })
  createdAt: Date;

  @Column({ default: () => 'CURRENT_TIMESTAMP', nullable: true })
  updatedAt: Date;

  @Column({ nullable: true })
  deletedAt: Date;
}
