import { OAuthMethod } from '@nest-react-native-monorepo/user-domain';

export class CreateUserRequestDto {
  username: string;

  email: string;

  oAuthMethod: OAuthMethod;

  oAuthId?: string;
}
