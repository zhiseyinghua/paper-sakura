import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthServicesService } from './auth/auth.services/auth.services.service';
import { AuthServicesService } from './auth.services/auth.services.service';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthServicesService } from './auth-services/auth-services.service';
import { AuthServicesService } from './auth.services/auth.services.service';

@Module({
  imports: [],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthServicesService, AuthService],
})
export class AppModule {}
