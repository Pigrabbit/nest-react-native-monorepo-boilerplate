export class CreateTokenRequestDto {
  grantType: 'refresh_token' | 'client_credentials' | 'password';

  refreshToken?: string;
}
