import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthFacade } from './applications/auth/auth.facade';
import { AuthService } from './domains/auth/auth.service';
import { UserCreateImpl } from './infrastructures/auth/user-create-impl.';
import { UserPasswordImpl } from './infrastructures/auth/user-password-impl.';
import { UserReadImpl } from './infrastructures/auth/user-read-impl.';
import { AuthController } from './interfaces/auth/auth.controller';

@Module({
  imports: [],
  controllers: [AppController, AuthController],
  providers: [
    AppService,
    AuthFacade,
    AuthService,
    UserReadImpl,
    UserCreateImpl,
    UserPasswordImpl,
  ],
})
export class AppModule {}
