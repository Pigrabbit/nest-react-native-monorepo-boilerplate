import { HttpException, HttpStatus } from '@nestjs/common';

export class ExpiredRefreshTokenException extends HttpException {
  constructor() {
    super('Refresh token has expired', HttpStatus.UNAUTHORIZED);
  }
}
