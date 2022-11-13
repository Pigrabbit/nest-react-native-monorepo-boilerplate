import { AuthService, KakaoOauthGuard } from '@nest-react-native-monorepo/auth-domain';
import { CreateTokenRequestDto, UserFromToken } from '@nest-react-native-monorepo/data-interface';
import { Body, Controller, Get, Post, Redirect, Req, UseFilters, UseGuards } from '@nestjs/common';

import { User } from '../../decorators/user.decorator';
import { OauthFilter } from '../../filters/oauth.filter';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('token')
  createTokens(
    @Body()
    dto: CreateTokenRequestDto
  ) {
    return this.authService.issueTokens(dto);
  }

  @UseGuards(KakaoOauthGuard)
  @Get('login/kakao')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async kakaoOAuth(@Req() req) {}

  @UseFilters(OauthFilter)
  @UseGuards(KakaoOauthGuard)
  @Redirect()
  @Get('login/kakao/redirect')
  kakaoOAuthRedirect(@User() user: UserFromToken) {
    const params = this.authService.getSearchParam(user);
    return { url: `success?${params.toString()}` };
  }

  @Get('login/kakao/fail')
  kakaoSignUpRedirect() {
    return {};
  }
}
