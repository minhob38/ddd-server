import { Injectable } from '@nestjs/common';
import { UserPassword } from 'src/domains/auth/user-password.interface';

@Injectable()
export class UserPasswordImpl implements UserPassword {
  comparePassword(password1: string, password2: string): boolean {
    return true;
  }
  createHash(password: string): string {
    return password;
  }
}
