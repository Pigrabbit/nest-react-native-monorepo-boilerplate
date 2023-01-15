import { CreateUserRequestDto } from '@nest-react-native-monorepo/data-interface';
import { UserService } from '@nest-react-native-monorepo/domain';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';

import { User } from '../../decorators/user.decorator';
import { JwtAuthGuard } from '../auth/guards';

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
