import { OAuthMethod } from '@nest-react-native-monorepo/user-domain';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-kakao';

import { AuthService } from '../auth.service';

@Injectable()
export class KakaoStrategy extends PassportStrategy(Strategy, 'kakao') {
  constructor(private authService: AuthService, private config: ConfigService) {
    super({
      clientID: config.get('KAKAO_CLIENT_ID'),
      callbackURL: '/auth/login/kakao/redirect',
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: any
  ) {
    const { id } = profile;

    const user = await this.authService.validateOAuthUser({
      oAuthMethod: OAuthMethod.KAKAO,
      oAuthId: id,
    });
    if (!user) {
      throw new NotFoundException(`Not registered user%%${id}`);
    }

    done(null, user);
  }
}
