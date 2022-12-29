import { Injectable } from '@nestjs/common';
import { UserRead } from '../../domains/auth/user-read.interface';
import { UserInfo } from '../../domains/auth/user.info';

@Injectable()
export class UserReadImpl implements UserRead {
  async findByEmail(email: string): Promise<UserInfo | null> {
    return null;
  }
}
