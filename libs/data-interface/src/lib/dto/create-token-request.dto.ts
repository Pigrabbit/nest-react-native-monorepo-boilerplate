import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTokenRequestDto {
  @IsNotEmpty()
  grantType: 'refresh_token' | 'client_credentials' | 'password';

  @IsOptional()
  @IsString()
  refreshToken?: string;
}
