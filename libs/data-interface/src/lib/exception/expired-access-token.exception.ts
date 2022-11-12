import { HttpException, HttpStatus } from '@nestjs/common';

export class ExpiredAccessTokenException extends HttpException {
  constructor() {
    super('Access token has expired', HttpStatus.UNAUTHORIZED);
  }
}
