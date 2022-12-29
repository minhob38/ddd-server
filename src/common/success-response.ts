export class SuccessResponse<T> {
  private readonly statusCode = 200;

  constructor(
    private readonly data: T,
    private readonly message?: string | void,
  ) {}
}
