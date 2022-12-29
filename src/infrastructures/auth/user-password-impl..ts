import { Injectable } from '@nestjs/common';
import { UserPassword } from 'src/domains/auth/user-password.interface';

@Injectable()
export class UserPasswordImpl implements UserPassword {
  comparePassword(password1: string, password2: string): boolean {
    return true;
  }
  createHash(password: string): string {
    // 1. bcrypt 방식
    // 2. 다른 방식...
    return password;
  }
}
