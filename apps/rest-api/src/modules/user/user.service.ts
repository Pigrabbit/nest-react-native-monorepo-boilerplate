import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OAuthMethod, UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  findByOAuthId(oAuthMethod: OAuthMethod, oAuthId: string) {
    return this.userRepository.findOne({
      where: {
        oAuthMethod,
        oAuthId,
      },
    });
  }
}
