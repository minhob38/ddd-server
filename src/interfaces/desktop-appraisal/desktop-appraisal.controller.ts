import { Body, Controller, Post } from '@nestjs/common';
import { AuthFacade } from 'src/applications/auth/auth.facade';
import { DesktopAppraisalFacade } from 'src/applications/desktop-appraisal/desktop-appraisal.facade';
import { SuccessResponse } from 'src/common/success-response';
import { UserInfo } from 'src/domains/auth/user.info';
import * as DesktopAppraisalDto from './desktop-appraisal.dto';

@Controller('/api/desktop-appraisal')
export class DesktopAppraisalController {
  constructor(
    private readonly desktopAppraisalFacade: DesktopAppraisalFacade,
  ) {}

  @Post()
  async orderDesktopAppraisal(
    @Body() body: DesktopAppraisalDto.DesktopAppraisalOrder,
  ): Promise<SuccessResponse<DesktopAppraisalInfo>> {
    // 1. 사용자 요청 해석
    const request = new DesktopAppraisalDto.DesktopAppraisalOrder(body);
    const command = request.toCommand();

    // 2. 요청 처리
    const desktopAppraisalInfo =
      await this.desktopAppraisalFacade.orderDesktopAppraisal(command);

    // 3. 응답 가공
    return new SuccessResponse<DesktopAppraisalInfo>(
      desktopAppraisalInfo,
      '회원가입에 성공했습니다.',
    );
  }
}
