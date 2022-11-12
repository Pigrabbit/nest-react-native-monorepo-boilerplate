import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidRefreshTokenException extends HttpException {
  constructor() {
    super('Invalid refresh token', HttpStatus.UNAUTHORIZED);
  }
}
