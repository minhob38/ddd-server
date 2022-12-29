export class DesktopAppraisalEntity {
  constructor(
    // private readonly id: string,
    private readonly address: string,
    private state: '요청' | '취소',
  ) {}

  getAddress() {
    return this.address;
  }

  getState() {
    return this.state;
  }

  cancel() {
    this.state = '취소';
  }
}
