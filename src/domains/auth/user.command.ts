import { UserEntity } from './user.entity';

export class UserCommand {
  constructor(readonly email: string, readonly password: string) {}

  toEntity(): UserEntity {
    return new UserEntity(this.email, this.password);
  }
}
