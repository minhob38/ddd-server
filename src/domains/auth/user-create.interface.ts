import { UserEntity } from './user.entity';
import { UserInfo } from './user.info';

export interface UserCreate {
  save(userEntity: UserEntity): Promise<UserInfo>;
}
