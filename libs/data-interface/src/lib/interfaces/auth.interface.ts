export interface AccessTokenPayload {
  sub: string;
  username: string;
  // role: UserRole;
}

export interface RefreshTokenPayload {
  sub: string;
}
