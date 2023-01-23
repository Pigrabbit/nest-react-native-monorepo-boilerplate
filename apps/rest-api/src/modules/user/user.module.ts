import { UserDomainModule } from '@nest-react-native-monorepo/domain';
import { Module } from '@nestjs/common';

import { AuthModule } from '../auth/auth.module';
import { UserController } from './user.controller';
@Module({
  imports: [UserDomainModule, AuthModule],
  controllers: [UserController],
})
export class UserModule {}
