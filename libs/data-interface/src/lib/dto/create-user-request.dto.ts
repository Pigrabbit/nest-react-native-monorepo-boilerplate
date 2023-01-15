import { OAuthMethod } from '@nest-react-native-monorepo/domain';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserRequestDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsEnum(OAuthMethod)
  oAuthMethod: OAuthMethod;

  @IsOptional()
  @IsString()
  oAuthId?: string;
}
