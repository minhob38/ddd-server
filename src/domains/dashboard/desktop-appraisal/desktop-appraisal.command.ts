import { DesktopAppraisalEntity } from './desktop-appraisal.entity';

export class DesktopAppraisalCommand {
  constructor(
    readonly userId,
    readonly address: string,
    readonly pnu: string,
  ) {}

  toDesktopAppraisalEntity(DashboardEntity): DesktopAppraisalEntity {
    return new DesktopAppraisalEntity(this.address);
  }

  toDashboardEntity() {}
}
