import { UserEntity } from './user.entity';

export class UserCommand {
  constructor(
    private readonly email: string,
    private readonly password: string,
  ) {}

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }

  toEntity(): UserEntity {
    return new UserEntity(this.email, this.password);
  }
}
