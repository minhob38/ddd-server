import { UserCommand } from 'src/domains/auth/user.command';

export class Signup {
  email: string;
  password: string;

  constructor(private readonly body: Signup) {
    this.email = body.email;
    this.password = body.password;
  }

  toCommand() {
    return new UserCommand(this.email, this.password);
  }
}
