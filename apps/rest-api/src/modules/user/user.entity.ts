import { Entity, Column } from 'typeorm';
import { AbstractEntity } from '../../common/entity.abstract';

export enum UserRole {
  ADMIN = 'ADMIN',
  CUSTOMER = 'CUSTOMER',
}

export enum OAuthMethod {
  LOCAL = 'LOCAL',
  KAKAO = 'KAKAO',
  APPLE = 'APPLE',
}

@Entity({
  name: 'user',
})
export class UserEntity extends AbstractEntity {
  @Column({
    unique: true,
  })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.CUSTOMER,
  })
  role: UserRole;

  @Column({
    type: 'enum',
    enum: OAuthMethod,
    name: 'oauth_method',
  })
  oAuthMethod: OAuthMethod;

  @Column({ name: 'oauth_id', nullable: true, select: false })
  oAuthId?: string;
}
