import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthSignupDto } from './dto/auth-signup.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepo: Repository<UserEntity>,
  ) {}

  async signUp(dto?: AuthSignupDto) {
    const newUser = this.usersRepo.create({ name: 'charles' });
    const user = await this.usersRepo.save(newUser);
    return user;
  }
  async login() {}
  async logout() {}
}
