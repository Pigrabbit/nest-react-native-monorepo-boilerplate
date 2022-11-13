import { AuthDomainModule } from '@nest-react-native-monorepo/auth-domain';
import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';

@Module({
  imports: [AuthDomainModule],
  controllers: [AuthController],
})
export class AuthModule {}
