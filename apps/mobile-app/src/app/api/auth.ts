import { CreateTokenResponseDto } from '@nest-react-native-monorepo/data-interface';
import axiosInstance from '../util/axios';

export const issueToken = async (refreshToken: string) => {
  const { data } = await axiosInstance.post<CreateTokenResponseDto>(
    '/auth/token',
    {
      grantType: 'refresh_token',
      refreshToken,
    }
  );

  return data;
};
