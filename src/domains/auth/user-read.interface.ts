import { UserInfo } from './user.info';

export interface UserRead {
  findByEmail(email: string): Promise<UserInfo>;
}
