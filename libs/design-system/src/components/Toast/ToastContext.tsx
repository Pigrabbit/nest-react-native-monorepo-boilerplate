import React, { createContext, Dispatch, ReactNode, useReducer } from 'react';

interface ToastState {
  isVisible: boolean;
  message: string | null;
  duration: number;
  // status에 따라 다른 icon, style 노출이 필요하지 않을까. eg) warning, error 등
  // variant: 'success' | 'error' | 'warning' | 'default';
}

const initialToastState: ToastState = {
  isVisible: false,
  message: null,
  duration: 3000,
};

export const SHOW_TOAST_ACTION = '@toast/show';
export const DISMISS_TOAST_ACTION = '@toast/dismiss';

interface ShowToastAction {
  type: typeof SHOW_TOAST_ACTION;
  payload: {
    message: string;
    duration?: number;
  };
}

interface DismissToastAction {
  type: typeof DISMISS_TOAST_ACTION;
}

type ToastAction = ShowToastAction | DismissToastAction;

export const ToastContext = createContext(
  {} as {
    state: ToastState;
    dispatch: Dispatch<ToastAction>;
  },
);

function toastReducer(
  state = initialToastState,
  action: ToastAction,
): ToastState {
  switch (action.type) {
    case SHOW_TOAST_ACTION:
      return {
        isVisible: true,
        message: action.payload.message,
        duration: action.payload.duration ?? state.duration,
      };
    case DISMISS_TOAST_ACTION:
      return { isVisible: false, message: null, duration: 3000 };
    default:
      return state;
  }
}

export function ToastContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(toastReducer, initialToastState);

  return (
    <ToastContext.Provider value={{ state, dispatch }}>
      {children}
    </ToastContext.Provider>
  );
}
