import { JwtAuthGuard } from '@nest-react-native-monorepo/auth-domain';
import { CreateUserRequestDto } from '@nest-react-native-monorepo/data-interface';
import { UserService } from '@nest-react-native-monorepo/user-domain';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';

import { User } from '../../decorators/user.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() dto: CreateUserRequestDto) {
    return this.userService.createOne(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getMyInfo(@User('id') userId: string) {
    return this.userService.findById(userId);
  }
}
