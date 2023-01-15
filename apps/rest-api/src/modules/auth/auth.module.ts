import { UserDomainModule } from '@nest-react-native-monorepo/domain';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AppleStrategy, JwtStrategy, KakaoStrategy } from './strategy';

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
  providers: [AuthService, JwtStrategy, KakaoStrategy, AppleStrategy],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
