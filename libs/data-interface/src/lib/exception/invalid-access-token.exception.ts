import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidAccessTokenException extends HttpException {
  constructor() {
    super('Invalid Access token', HttpStatus.UNAUTHORIZED);
  }
}
