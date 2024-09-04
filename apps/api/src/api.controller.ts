import { Controller, Get, Inject, Post } from '@nestjs/common';

import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class ApiController {
  constructor(@Inject('AUTH_SERVICE') private authService: ClientProxy) {}

  @Post('/login')
  async loginUser() {
    return this.authService.send(
      { cmd: 'auth-login' },
      { username: 'user', password: 1234, email: '@1234.com' },
    );
  }

  @Post('/sign-up')
  async signUpUser() {
    return this.authService.send(
      { cmd: 'auth-sign-up' },
      { username: 'user', password: 1234, email: '@1234.com' },
    );
  }
}
