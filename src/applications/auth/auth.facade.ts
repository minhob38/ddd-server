import { Injectable } from '@nestjs/common';
import { AuthService } from 'src/domains/auth/auth.service';
import { UserCommand } from 'src/domains/auth/user.command';

@Injectable()
export class AuthFacade {
  constructor(private readonly authService: AuthService) {}

  // 여러 domain logic 묶음
  async signup(command: UserCommand) {
    // 1. 회원가입
    const userInfo = await this.authService.createUser(command);
    // 2. 회원가입 알림
    setTimeout(() => console.log('회원가입이 완료되었습니다 : )', 3000));
    return userInfo;
  }
}
