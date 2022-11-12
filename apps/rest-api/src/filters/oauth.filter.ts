import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  NotFoundException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(NotFoundException)
export class OauthFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const [message, oAuthId] = exception.getResponse()['message'].split('%%');

    if (message === 'Not registered user') {
      response
        .writeHead(302, {
          location: `fail?oAuthId=${oAuthId}`,
        })
        .end();
    }
  }
}
