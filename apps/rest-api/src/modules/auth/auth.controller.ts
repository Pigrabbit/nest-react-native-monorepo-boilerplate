import {
  Controller,
  Get,
  Redirect,
  Req,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { User } from '../../decorators/user.decorator';
import { OauthFilter } from '../../filters/oauth.filter';
import { KakaoOauthGuard } from '../../guards/kakao-oauth.guard';
import { UserEntity } from '../user/user.entity';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(KakaoOauthGuard)
  @Get('login/kakao')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async kakaoOAuth(@Req() req) {}

  @UseFilters(OauthFilter)
  @UseGuards(KakaoOauthGuard)
  @Redirect()
  @Get('login/kakao/redirect')
  async kakaoOAuthRedirect(@User() user: UserEntity) {
    const params = this.authService.getSearchParam(user);

    return { url: `success?${params.toString()}` };
  }

  @Get('login/kakao/fail')
  kakaoSignUpRedirect() {
    return {};
  }
}
