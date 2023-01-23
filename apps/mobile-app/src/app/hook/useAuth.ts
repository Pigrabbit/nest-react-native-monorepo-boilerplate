import * as Sentry from '@sentry/react-native';
import { useContext, useEffect } from 'react';
import { Alert } from 'react-native';
import * as Keychain from 'react-native-keychain';

import { issueToken } from '../api/auth';
import {
  AuthContext,
  REFRESH_ACCESS_TOKEN,
  REFRESH_TOKEN_EXPIRED,
  RETRIEVE_TOKEN_FROM_STORAGE,
  USER_LOGIN,
  USER_LOGOUT,
} from '../context/AuthContext';

export function useAuth() {
  const { state, dispatch } = useContext(AuthContext);

  useEffect(() => {
    Keychain.getGenericPassword().then((result) => {
      if (result === false) return;
      dispatch({
        type: RETRIEVE_TOKEN_FROM_STORAGE,
        payload: JSON.parse(result.password) as {
          accessToken: string;
          refreshToken: string;
        },
      });
    });
  }, []);

  const login = (tokens: { accessToken: string; refreshToken: string }): void => {
    Keychain.setGenericPassword('mobile-app-user', JSON.stringify(tokens));
    dispatch({ type: USER_LOGIN, payload: tokens });
  };

  const logout = (): void => {
    Keychain.resetGenericPassword();
    dispatch({ type: USER_LOGOUT });
    Sentry.setUser(null);
  };

  const refreshTokenExpired = (): void => {
    Keychain.resetGenericPassword();
    dispatch({ type: REFRESH_TOKEN_EXPIRED });

    Alert.alert('', 'Please login again', [{ text: 'cancel', onPress: () => null }]);
  };

  const refreshAccessToken = async (): Promise<string> => {
    const token = await issueToken(state.refreshToken);

    Keychain.setGenericPassword('mobile-app-user', JSON.stringify({ ...state, accessToken: token.access_token }));
    dispatch({
      type: REFRESH_ACCESS_TOKEN,
      payload: { accessToken: token.access_token },
    });

    return token.access_token;
  };

  return {
    ...state,
    authenticated: state.accessToken !== null,
    login,
    logout,
    refreshTokenExpired,
    refreshAccessToken,
  };
}
