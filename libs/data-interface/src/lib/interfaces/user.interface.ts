import { UserEntity } from '@nest-react-native-monorepo/domain';

export type UserFromToken = Pick<UserEntity, 'id' | 'username' | 'role'>;
