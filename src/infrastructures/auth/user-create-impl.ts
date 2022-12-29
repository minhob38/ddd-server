import { Injectable } from '@nestjs/common';
import { UserCreate } from 'src/domains/auth/user-create.interface';
import { UserEntity } from 'src/domains/auth/user.entity';
import { UserInfo } from '../../domains/auth/user.info';
import { UserPasswordImpl } from './user-password-impl.';

@Injectable()
export class UserCreateImpl implements UserCreate {
  constructor(private readonly userPassword: UserPasswordImpl) {}

  async save(userEntity: UserEntity): Promise<UserEntity> {
    const hash = this.userPassword.createHash(userEntity.getPassword());
    const userEntity = this.userRepository.save();
    /* db 저장 */
    return userEntity;
  }
}
