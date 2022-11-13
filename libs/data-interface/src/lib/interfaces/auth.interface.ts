import { UserRole } from '@nest-react-native-monorepo/user-domain';

export interface AccessTokenPayload {
  sub: string;
  username: string;
  role: UserRole;
}

export interface RefreshTokenPayload {
  sub: string;
}
