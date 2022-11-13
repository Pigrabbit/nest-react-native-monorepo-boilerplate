import { AuthDomainModule } from '@nest-react-native-monorepo/auth-domain';
import { UserDomainModule } from '@nest-react-native-monorepo/user-domain';
import { Module } from '@nestjs/common';

import { UserController } from './user.controller';
@Module({
  imports: [UserDomainModule, AuthDomainModule],
  controllers: [UserController],
})
export class UserModule {}
