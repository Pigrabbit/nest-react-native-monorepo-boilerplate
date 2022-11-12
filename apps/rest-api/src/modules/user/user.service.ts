import { CreateUserRequestDto } from '@nest-react-native-monorepo/data-interface';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OAuthMethod, UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  async findById(id: string): Promise<UserEntity> {
    if (id === undefined) {
      throw new BadRequestException();
    }
    return this.userRepository.findOneOrFail({ where: { id } }).catch(() => {
      throw new NotFoundException('User not found');
    });
  }

  findByOAuthId(
    oAuthMethod: OAuthMethod,
    oAuthId: string
  ): Promise<UserEntity> {
    return this.userRepository.findOne({
      where: {
        oAuthMethod,
        oAuthId,
      },
    });
  }

  createOne({
    username,
    email,
    // @ts-expect-error uncomment OAuthMethod field in CreateUserRequestDto
    oAuthMethod,
    oAuthId = null,
  }: CreateUserRequestDto): Promise<UserEntity> {
    const user = this.userRepository.create();

    if (oAuthMethod !== OAuthMethod.LOCAL && oAuthId === null) {
      throw new BadRequestException('oAuthId is required');
    }

    user.username = username;
    user.email = email;
    user.oAuthMethod = oAuthMethod;
    user.oAuthId = oAuthId;

    return this.userRepository.save(user);
  }
}
