import { createContext, Dispatch, ReactNode, useReducer } from 'react';

export const USER_LOGIN = '@auth/user/login';
export const USER_LOGOUT = '@auth/user/logout';
export const REFRESH_ACCESS_TOKEN = '@auth/token/refresh';
export const RETRIEVE_TOKEN_FROM_STORAGE = '@auth/token/retrieve';
export const REFRESH_TOKEN_EXPIRED = '@auth/refresh-token/expired';
export const TOKEN_NOT_FOUND_IN_STORAGE = '@auth/token/not-found';

interface UserLoginAction {
  type: typeof USER_LOGIN;
  payload: { accessToken: string; refreshToken: string };
}

interface UserLogoutAction {
  type: typeof USER_LOGOUT;
}

interface RefreshAccessToken {
  type: typeof REFRESH_ACCESS_TOKEN;
  payload: { accessToken: string };
}

interface RetrieveTokenFromStorageAction {
  type: typeof RETRIEVE_TOKEN_FROM_STORAGE;
  payload: { accessToken: string; refreshToken: string };
}

interface RefreshTokenExpiredAction {
  type: typeof REFRESH_TOKEN_EXPIRED;
}

interface TokenNotFoundInStorageAction {
  type: typeof TOKEN_NOT_FOUND_IN_STORAGE;
}

type AuthAction =
  | UserLoginAction
  | UserLogoutAction
  | RefreshAccessToken
  | RetrieveTokenFromStorageAction
  | RefreshTokenExpiredAction
  | TokenNotFoundInStorageAction;

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
};

export const AuthContext = createContext(
  {} as { state: AuthState; dispatch: Dispatch<AuthAction> }
);

function authReducer(state = initialState, action: AuthAction): AuthState {
  switch (action.type) {
    case USER_LOGIN:
      return { ...action.payload };
    case RETRIEVE_TOKEN_FROM_STORAGE:
      return { ...action.payload };
    case REFRESH_ACCESS_TOKEN:
      return { ...state, accessToken: action.payload.accessToken };
    case USER_LOGOUT:
      return { ...initialState };
    case REFRESH_TOKEN_EXPIRED:
      return { ...initialState };
    default:
      return state;
  }
}

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
