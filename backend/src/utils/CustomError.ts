export class CustomError extends Error {
  constructor(
    public readonly statusCode: number,
    public readonly message: string,
    public readonly hint?: Record<string, unknown>,
    public readonly code?: string
  ) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }

  toJSON() {
    return {
      statusCode: this.statusCode,
      error: this.message,
      ...(this.hint && { hint: this.hint }),
      ...(this.code && { code: this.code }),
    };
  }
}
