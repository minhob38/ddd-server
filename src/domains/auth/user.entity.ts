export class UserEntity {
  constructor(
    // private readonly id: string,
    private readonly email: string,
    private readonly password: string,
  ) {}

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }
}
