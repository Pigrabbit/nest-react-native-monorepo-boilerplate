import { useContext, useEffect } from 'react';
import * as Keychain from 'react-native-keychain';

import {
  AuthContext,
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

  const login = (tokens: { accessToken: string; refreshToken: string }) => {
    Keychain.setGenericPassword('mobile-app-user', JSON.stringify(tokens));
    dispatch({ type: USER_LOGIN, payload: tokens });
  };

  const logout = () => {
    Keychain.resetGenericPassword();
    dispatch({ type: USER_LOGOUT });
  };

  return {
    ...state,
    login,
    logout,
    authenticated: state.accessToken !== null,
  };
}
