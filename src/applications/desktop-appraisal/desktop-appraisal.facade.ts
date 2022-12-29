import { Injectable } from '@nestjs/common';
import { AuthService } from 'src/domains/auth/auth.service';
import { UserCommand } from 'src/domains/auth/user.command';
import { DesktopAppraisalCommand } from 'src/domains/dashboard/desktop-appraisal/desktop-appraisal.command';
import { DesktopAppraisalService } from 'src/domains/dashboard/desktop-appraisal/desktop-appraisal.service';

/**
 * application 계층은 interface 계층과 domain 계층을 연결해주는 계층
 * domain을 묶고 흐름을 제어 (비지니스 로직을 가지고 있지는 않음)
 */
@Injectable()
export class DesktopAppraisalFacade {
  constructor(
    private readonly desktopAppraisalService: DesktopAppraisalService,
    private readonly dashboardHistoryService: DashboardHistoryService,
  ) {}

  // 여러 domain logic 묶음
  async orderDesktopAppraisal(command: DesktopAppraisalCommand) {
    // 1. 예상평가저장
    const desktopAppraisalInfo =
      await this.desktopAppraisalService.createDesktopAppraisal(command);

    // 2. 대시보드 history 저장 (예상평가요청)
    await this.dashboardHistoryService.save('예상평가요청');

    return desktopAppraisalInfo;
  }

  async cancleDesktopAppraisal(criteria) {
    // 1. 예상평가취소
    const desktopAppraisalInfo =
      await this.desktopAppraisalService.cancelDesktopAppraisal(criteria);

    // 2. 대시보드 history 저장 (예상평가취소)
    await this.dashboardHistoryService.save('예상평가취소');

    return desktopAppraisalInfo;
  }
}
