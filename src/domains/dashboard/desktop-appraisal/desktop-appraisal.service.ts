import { BadRequestException, Injectable } from '@nestjs/common';
import { CalendarImpl } from 'src/infrastructures/common/calendar-impl';
import { DesktopAppraisalCreateImpl } from 'src/infrastructures/desktop-appraisal/desktop-appraisal-create-impl';
import { DesktopAppraisalReadImpl } from 'src/infrastructures/desktop-appraisal/desktop-appraisal-read-impl';
import { DesktopAppraisalUpdateImpl } from 'src/infrastructures/desktop-appraisal/desktop-appraisal-update-impl';
import { DesktopAppraisalCommand } from './desktop-appraisal.command';

@Injectable()
export class DesktopAppraisalService {
  constructor(
    private readonly desktopAppraisalRead: DesktopAppraisalReadImpl,
    private readonly desktopAppraisalCreate: DesktopAppraisalCreateImpl,
    private readonly desktopAppraisalUpdate: DesktopAppraisalUpdateImpl,
    private readonly calendar: CalendarImpl,
  ) {}

  async createDesktopAppraisal(
    command: DesktopAppraisalCommand,
  ): Promise<DesktopAppraisalInfo> {
    // 1. 예상감정조회 및 신청가능 상태 확인
    let desktopAppraisal = await this.desktopAppraisalRead.findByUserId(
      command.userId,
    );
    const { finishedAt } = desktopAppraisal;
    const isThreeMonthPassed = this.calendar.checkThreeMonthPassed(finishedAt);
    if (!isThreeMonthPassed) {
      new BadRequestException('신청한지 3개월이 지나지 않았습니다.');
    }

    // 2. 예상감정저장
    // 2.1 예상감정 entity 데이터 생성
    let dashboardAsset = null;
    // dashboardAsset 자동생성
    if (pnu) {
      dashboardAsset = await this.assetRead.findByPnu(pnu);
    }

    const dashboardEntity = command.toDashboardEntity();
    const desktopAppraisalEntity =
      command.toDesktopAppraisalEntity(dashboardEntity);

    // 2.2 예상감정 저장
    await this.dashboardCreate.save(dashboardEntity);
    await this.desktopAppraisalCreate.save(desktopAppraisalEntity);

    desktopAppraisal = await this.desktopAppraisalCreate.save(
      desktopAppraisalEntity,
    );

    // 3. 예상감정정보 반환
    return desktopAppraisal;
  }

  async cancelDesktopAppraisal(
    desktopAppraisalCommand: DesktopAppraisalCommand,
  ): Promise<DesktopAppraisalInfo> {
    // 1. 예상감정조회 및 취소가능 상태 확인
    let desktopAppraisal = await this.desktopAppraisalRead.findByDashboardId(
      desktopAppraisalCommand.id,
    );
    const canceledAt = desktopAppraisal.getCanceledAt();
    if (!canceledAt) {
      new BadRequestException('이미 신청하였습니다.');
    }

    // 2. 예상감정상태 업데이트 (취소)
    const desktopAppraisalEntity = desktopAppraisal.toEntity();
    desktopAppraisalEntity.cancel();
    desktopAppraisal = await this.desktopAppraisalCreate.save(
      desktopAppraisalEntity,
    );

    // 3. 예상감정반환
    return desktopAppraisal;
  }
}

@Injectable()
export class OpenDesktopAppraisalService {
  constructor() {}
}
