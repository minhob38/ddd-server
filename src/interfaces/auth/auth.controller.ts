import { Body, Controller, Post } from '@nestjs/common';
import { AuthFacade } from 'src/applications/auth/auth.facade';
import { SuccessResponse } from 'src/common/success-response';
import { UserInfo } from 'src/domains/auth/user.info';
import * as AuthDto from './auth.dto';

@Controller('/api/auth')
export class AuthController {
  constructor(private readonly authFacade: AuthFacade) {}

  @Post('/signup')
  async signup(
    @Body() body: AuthDto.Signup,
  ): Promise<SuccessResponse<UserInfo>> {
    // 1. 사용자 요청 해석
    const request = new AuthDto.Signup(body);
    const command = request.toCommand();

    // 2. 요청 처리
    const userInfo = await this.authFacade.signup(command);

    // 3. 응답 가공
    return new SuccessResponse<UserInfo>(userInfo, '회원가입에 성공했습니다.');
  }
}
