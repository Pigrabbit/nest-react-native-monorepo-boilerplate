import { act, renderHook, RenderHookResult, waitFor } from '@testing-library/react-native';

import { AuthContextProvider } from '../context/AuthContext';
import { useAuth } from './useAuth';

describe('useAuth', () => {
  let result: RenderHookResult<ReturnType<typeof useAuth>, unknown>['result'];

  beforeEach(() => {
    const wrapper = ({ children }) => <AuthContextProvider>{children}</AuthContextProvider>;
    result = renderHook(() => useAuth(), { wrapper }).result;
  });
  it('should login', async () => {
    act(() => {
      result.current.login({ accessToken: 'mock-access-token', refreshToken: 'mock-refresh-token' });
    });

    await waitFor(() => expect(result.current.authenticated).toEqual(true));
  });

  it('should logout', async () => {
    act(() => {
      result.current.logout();
    });

    await waitFor(() => expect(result.current.authenticated).toEqual(false));
  });

  it('should handle expired refresh token', async () => {
    act(() => {
      result.current.refreshTokenExpired();
    });

    await waitFor(() => {
      expect(result.current.accessToken).toBeNull();
      expect(result.current.refreshToken).toBeNull();
    });
  });
});
