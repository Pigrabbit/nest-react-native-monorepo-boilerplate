import { useCallback, useContext } from 'react';

import {
  DISMISS_TOAST_ACTION,
  SHOW_TOAST_ACTION,
  ToastContext,
} from '../components/Toast/ToastContext';

function useToast() {
  const { state, dispatch } = useContext(ToastContext);

  const show = useCallback(
    ({ message, duration }: { message: string; duration?: number }) => {
      if (state.isVisible) return;

      dispatch({ type: SHOW_TOAST_ACTION, payload: { message, duration } });
    },
    [state.isVisible]
  );

  const dismiss = useCallback(() => {
    if (!state.isVisible) return;

    dispatch({ type: DISMISS_TOAST_ACTION });
  }, [state.isVisible]);

  return { ...state, show, dismiss };
}

export default useToast;
