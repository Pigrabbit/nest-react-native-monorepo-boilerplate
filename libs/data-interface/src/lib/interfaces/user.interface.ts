import { UserEntity } from '@nest-react-native-monorepo/user-domain';

export type UserFromToken = Pick<UserEntity, 'id' | 'username' | 'role'>;
