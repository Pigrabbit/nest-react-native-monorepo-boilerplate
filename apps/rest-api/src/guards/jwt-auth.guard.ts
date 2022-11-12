import {
  AccessTokenPayload,
  ExpiredAccessTokenException,
  InvalidAccessTokenException,
  MissingAccessTokenException,
} from '@nest-react-native-monorepo/data-interface';
import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ExtractJwt } from 'passport-jwt';
import { AuthService } from '../modules/auth/auth.service';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') implements CanActivate {
  constructor(@Inject(AuthService) private authService: AuthService) {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    try {
      const accessToken = ExtractJwt.fromAuthHeaderAsBearerToken()(request);
      if (!accessToken) {
        throw new MissingAccessTokenException();
      }

      const decodedAccessToken =
        await this.authService.validateToken<AccessTokenPayload>(accessToken);
      if (!decodedAccessToken) {
        throw new InvalidAccessTokenException();
      }

      return this.activate(context);
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        throw new ExpiredAccessTokenException();
      }
      return false;
    }
  }

  activate(context: ExecutionContext): Promise<boolean> {
    return super.canActivate(context) as Promise<boolean>;
  }

  handleRequest(err, user) {
    if (err || !user) {
      throw err || new UnauthorizedException();
    }

    return user;
  }
}
