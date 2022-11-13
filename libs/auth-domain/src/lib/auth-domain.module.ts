import { UserDomainModule } from '@nest-react-native-monorepo/user-domain';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { JwtStrategy, KakaoStrategy } from './strategy';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: async (config: ConfigService) => ({
        secret: config.get('JWT_SECRET'),
      }),
      inject: [ConfigService],
    }),
    UserDomainModule,
  ],
  providers: [AuthService, JwtStrategy, KakaoStrategy],
  exports: [AuthService],
})
export class AuthDomainModule {}
