import {
  AccessTokenPayload,
  CreateTokenRequestDto,
  CreateTokenResponseDto,
  ExpiredRefreshTokenException,
  InvalidRefreshTokenException,
  RefreshTokenPayload,
} from '@nest-react-native-monorepo/data-interface';
import {
  UserService,
  OAuthMethod,
} from '@nest-react-native-monorepo/user-domain';
import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { hoursToSeconds, minutesToSeconds } from 'date-fns';
import { UserFromToken } from '../../interfaces';

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

  getSearchParam(user: UserFromToken): URLSearchParams {
    const accessToken = this.createAccessToken(user);
    const refreshToken = this.createRefreshToken(user);

    const params = new URLSearchParams();
    params.append('access_token', accessToken);
    params.append('refresh_token', refreshToken);
    params.append('expires_in', minutesToSeconds(5).toString());
    params.append('token_type', 'bearer');

    return params;
  }

  issueTokens({
    grantType,
    refreshToken,
  }: CreateTokenRequestDto): Promise<CreateTokenResponseDto> {
    if (grantType === 'client_credentials' || grantType === 'password') {
      throw new BadRequestException('Unsupported grant type');
    }

    return this.refreshAccessToken(refreshToken);
  }

  async refreshAccessToken(
    refreshToken: string
  ): Promise<CreateTokenResponseDto> {
    try {
      const decodedRefreshToken = await this.validateToken<RefreshTokenPayload>(
        refreshToken
      );

      if (!decodedRefreshToken) {
        throw new InvalidRefreshTokenException();
      }

      const { sub: userId } = decodedRefreshToken;
      const user = await this.userService.findById(userId);
      const newAccessToken = this.createAccessToken(user);

      return {
        access_token: newAccessToken,
        refresh_token: refreshToken,
        token_type: 'bearer',
        expires_in: hoursToSeconds(12),
      };
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        throw new ExpiredRefreshTokenException();
      }

      throw new InvalidRefreshTokenException();
    }
  }

  createAccessToken(user: UserFromToken): string {
    const { id, username, role } = user;
    const payload: AccessTokenPayload = { sub: id, username, role };

    return this.jwtService.sign(payload, { expiresIn: '5m' });
  }

  createRefreshToken(user: UserFromToken): string {
    const { id } = user;
    const payload: RefreshTokenPayload = { sub: id };

    return this.jwtService.sign(payload, { expiresIn: '30d' });
  }

  validateToken<T extends object>(token: string): Promise<undefined | T> {
    return this.jwtService.verifyAsync<T>(token);
  }
}
