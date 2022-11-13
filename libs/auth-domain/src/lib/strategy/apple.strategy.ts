import { OAuthMethod } from '@nest-react-native-monorepo/user-domain';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import Strategy from 'passport-apple';

import { AuthService } from '../auth.service';

type ValidateFunctionWithRequest = (
  req: Request,
  accessToken: string,
  refreshToken: string,
  decodedIdToken: Strategy.DecodedIdToken,
  verify: Strategy.VerifyCallback
) => void;

@Injectable()
export class AppleStrategy extends PassportStrategy(Strategy, 'apple') {
  constructor(private authService: AuthService, private config: ConfigService) {
    super({
      clientID: config.get('APPLE_CLIENT_ID'),
      teamID: config.get('APPLE_TEAM_ID'),
      keyID: config.get('APPLE_KEY_ID'),
      privateKeyString: config.get('APPLE_PRIVATE_KEY'),
      callbackURL: config.get('APPLE_CALLBACK_URL'),
      passReqToCallback: true,
      scope: ['email', 'name'],
    });
  }

  async validate(...args: Parameters<ValidateFunctionWithRequest>) {
    const [req, accessToken, refreshToken, decodedIdToken, verified] = args;

    const body = req.body;

    const decodedToken = this.authService.decodeToken(body.id_token) as {
      [key: string]: any;
    };

    const user = await this.authService.validateOAuthUser({
      oAuthMethod: OAuthMethod.APPLE,
      oAuthId: decodedToken?.sub || '',
    });
    if (!user) {
      throw new NotFoundException(`Not registered user%%${decodedToken?.sub || ''}`);
    }

    verified(null, user);
  }

  authenticate(req: Request, options?: any): void {
    if (req.body.code !== undefined) {
      super.authenticate(req, {
        ...options,
      });
    } else {
      const params = new URLSearchParams();
      params.append('property', 'user');
      params.append('response_type', 'code id_token');
      params.append('scope', 'name email');
      params.append('response_mode', 'form_post');
      params.append('redirect_uri', this.config.get('APPLE_CALLBACK_URL'));
      params.append('client_id', this.config.get('APPLE_CLIENT_ID'));

      req.res?.writeHead(302, {
        Location: `https://appleid.apple.com/auth/authorize?${params.toString()}`,
      });
      req.res?.end();
    }
  }
}
