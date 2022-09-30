import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  log = 'AuthController';
  constructor(private authService: AuthService) {}

  @Post('/email')
  sendEmail() {
    return '';
  }
}
