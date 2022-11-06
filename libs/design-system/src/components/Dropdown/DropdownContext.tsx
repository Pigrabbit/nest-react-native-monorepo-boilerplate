import React, { createContext, Dispatch, ReactNode, useReducer } from 'react';

export interface Option {
  label: string;
  value: string | number;
}

interface State {
  /* 현재 활성화 되어있는 드롭다운 식별자 */
  focusedDropdownKey?: string;
  /* 바텀시트가 열렸을 때 보여주는 옵션 목록 */
  dropdownOptions?: Option[];
  /* 드롭다운 식별자 - 선택된 옵션이 key-value인 객체 */
  selectedOptions?: {
    [dropdownName: string]: Option | null;
  };
}

type DropdownAction =
  | ShowDropdownAction
  | HideDropdownAction
  | SelectOptionAction
  | InitializeDropdownAction;

export const SHOW_DROPDOWN = '@dropdown/show';
export const HIDE_DROPDOWN = '@dropdown/hide';
export const SELECT_OPTION = '@dropdown/selectOption';
export const INITIALIZE_DROPDOWN = '@dropdown/init';

interface ShowDropdownAction {
  type: typeof SHOW_DROPDOWN;
  payload: {
    dropdownKey: string;
    dropdownOptions: Option[];
    selectedOption: Option | null;
  };
}

interface HideDropdownAction {
  type: typeof HIDE_DROPDOWN;
}

interface SelectOptionAction {
  type: typeof SELECT_OPTION;
  payload: {
    dropdownKey: string;
    selectedOption: Option | null;
  };
}

interface InitializeDropdownAction {
  type: typeof INITIALIZE_DROPDOWN;
}

const initialState: State = {};

export const DropdownContext = createContext(
  {} as { state: State; dispatch: Dispatch<DropdownAction> },
);

const dropdownReducer = (state = initialState, action: DropdownAction) => {
  switch (action.type) {
    case SHOW_DROPDOWN:
      return {
        focusedDropdownKey: action.payload.dropdownKey,
        dropdownOptions: action.payload.dropdownOptions,
        selectedOptions: {
          ...state.selectedOptions,
          [action.payload.dropdownKey]: action.payload.selectedOption,
        },
      };
    case HIDE_DROPDOWN:
      return {
        selectedOptions: state.selectedOptions,
      };
    case SELECT_OPTION:
      return {
        ...state,
        selectedOptions: {
          ...state.selectedOptions,
          [action.payload.dropdownKey]: action.payload.selectedOption,
        },
      };
    case INITIALIZE_DROPDOWN:
      return initialState;
    default:
      return state;
  }
};

export const DropdownContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(dropdownReducer, initialState);
  return (
    <DropdownContext.Provider value={{ state, dispatch }}>
      {children}
    </DropdownContext.Provider>
  );
};
