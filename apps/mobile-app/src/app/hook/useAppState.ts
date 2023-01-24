import analytics from '@react-native-firebase/analytics';
import { useRef, useEffect } from 'react';
import { AppStateStatus, AppState } from 'react-native';

export function useAppState() {
  const appState = useRef<AppStateStatus>(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (nextAppState === 'active' && appState.current !== 'active') {
        // handle onForeground (back -> fore)
        analytics().logAppOpen();
      } else if (nextAppState.match(/inactive|background/)) {
        // handle onBackground (fore -> back)
      }
      appState.current = nextAppState;
    });

    return () => subscription.remove();
  }, []);
}
