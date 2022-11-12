import { UserEntity } from '../modules/user/user.entity';

export type UserFromToken = Pick<UserEntity, 'id' | 'username' | 'role'>;
