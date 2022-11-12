import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { minutesToSeconds } from 'date-fns';
import { OAuthMethod, UserEntity } from '../user/user.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService
  ) {}

  async validateOAuthUser({
    oAuthMethod,
    oAuthId,
  }: {
    oAuthMethod: OAuthMethod;
    oAuthId: string;
  }) {
    const user = await this.userService.findByOAuthId(oAuthMethod, oAuthId);
    return user;
  }

  async getSearchParam(user: UserEntity): Promise<URLSearchParams> {
    const [accessToken, refreshToken] = await Promise.all([
      this.createAccessToken(user),
      this.createRefreshToken(user),
    ]);

    const params = new URLSearchParams();
    params.append('access_token', accessToken);
    params.append('refresh_token', refreshToken);
    params.append('expires_in', minutesToSeconds(5).toString());
    params.append('token_type', 'bearer');

    return params;
  }

  async createAccessToken(user: UserEntity) {
    const { id, username, role } = user;
    const payload = { sub: id, username, role };

    return this.jwtService.sign(payload);
  }

  async createRefreshToken(user: UserEntity) {
    const { id } = user;
    const payload = { sub: id };

    return this.jwtService.sign(payload, { expiresIn: '30d' });
  }
}
