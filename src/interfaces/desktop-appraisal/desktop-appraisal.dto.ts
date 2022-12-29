import { DesktopAppraisalCommand } from 'src/domains/dashboard/desktop-appraisal/desktop-appraisal.command';

export class DesktopAppraisalOrder {
  address: string;

  constructor(private readonly body: DesktopAppraisalOrder) {
    this.address = body.address;
  }

  toCommand() {
    return new DesktopAppraisalCommand(this.address);
  }
}
