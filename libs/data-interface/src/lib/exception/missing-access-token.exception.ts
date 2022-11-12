import { HttpException, HttpStatus } from '@nestjs/common';

export class MissingAccessTokenException extends HttpException {
  constructor() {
    super('Access token is required', HttpStatus.UNAUTHORIZED);
  }
}
