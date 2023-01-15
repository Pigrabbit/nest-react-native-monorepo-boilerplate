import { CreateUserRequestDto, GetUserResponseDto } from '@nest-react-native-monorepo/data-interface';

import axiosInstance from '../util/axios';

export const getMe = async () => {
  const { data } = await axiosInstance.get<GetUserResponseDto>('/user/me');
  return data;
};

export const postUser = async (dto: CreateUserRequestDto) => {
  const { data } = await axiosInstance.post('/user', { ...dto });
  return data;
};
