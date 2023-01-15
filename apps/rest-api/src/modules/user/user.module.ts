import { UserDomainModule } from '@nest-react-native-monorepo/domain';
import { Module } from '@nestjs/common';

import { UserController } from './user.controller';
@Module({
  imports: [UserDomainModule],
  controllers: [UserController],
})
export class UserModule {}
