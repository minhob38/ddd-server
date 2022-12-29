import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/domains/auth/user.entity';
import { UserRead } from '../../domains/auth/user-read.interface';
import { UserInfo } from '../../domains/auth/user.info';

@Injectable()
export class UserReadImpl implements UserRead {
  async findByEmail(email: string): Promise<UserEntity | null> {
    return null;
  }
}
