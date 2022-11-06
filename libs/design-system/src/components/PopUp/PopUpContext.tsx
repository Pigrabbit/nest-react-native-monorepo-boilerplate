import React, { createContext, Dispatch, ReactNode, useReducer } from 'react';

type PopUpOptions = ConfirmPopUpOptions | AlertPopUpOptions;

interface PopUpOptionBase {
  popUpType: 'ALERT' | 'CONFIRM';
  title?: string;
  subDesc?: string;
}

export interface ConfirmPopUpOptions extends PopUpOptionBase {
  popUpType: 'CONFIRM';
  leftButtonLabel?: string;
  rightButtonLabel?: string;
  onPressLeftButton?: () => void;
  onPressRightButton?: () => void;
}

export interface AlertPopUpOptions extends PopUpOptionBase {
  popUpType: 'ALERT';
  buttonLabel?: string;
  onPressButton?: () => void;
}

interface State {
  isShown: boolean;
  options?: PopUpOptions;
}

const initialState: State = {
  isShown: false,
};

export const SHOW_POP_UP = '@popup/show';
export const HIDE_POP_UP = '@popup/hide';

type PopUpAction = ShowPopUpAction | HidePopUpAction;

interface ShowPopUpAction {
  type: typeof SHOW_POP_UP;
  payload: {
    options: PopUpOptions;
  };
}

interface HidePopUpAction {
  type: typeof HIDE_POP_UP;
}

export const PopUpContext = createContext(
  {} as { state: State; dispatch: Dispatch<PopUpAction> },
);

const popUpReducer = (state = initialState, action: PopUpAction) => {
  switch (action.type) {
    case SHOW_POP_UP:
      return {
        isShown: true,
        options: action.payload.options,
      };
    case HIDE_POP_UP:
      return { isShown: false };
    default:
      return state;
  }
};

export const PopUpContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(popUpReducer, initialState);
  return (
    <PopUpContext.Provider value={{ state, dispatch }}>
      {children}
    </PopUpContext.Provider>
  );
};
