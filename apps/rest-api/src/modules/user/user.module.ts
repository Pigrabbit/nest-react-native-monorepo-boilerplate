import { forwardRef, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { AuthModule } from '../auth/auth.module';
import { UserDomainModule } from '@nest-react-native-monorepo/user-domain';
@Module({
  imports: [UserDomainModule],
  controllers: [UserController],
})
export class UserModule {}
