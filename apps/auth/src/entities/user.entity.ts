import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;

  // constructor(user: Partial<UserEntity>) {
  //   Object.assign(this, user);
  // }
}
