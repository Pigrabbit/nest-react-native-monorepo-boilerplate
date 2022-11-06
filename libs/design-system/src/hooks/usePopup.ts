import { useCallback, useContext } from 'react';

import {
  AlertPopUpOptions,
  ConfirmPopUpOptions,
  HIDE_POP_UP,
  PopUpContext,
  SHOW_POP_UP,
} from '../components/PopUp/PopUpContext';

const usePopUp = () => {
  const {
    state: { isShown, options },
    dispatch,
  } = useContext(PopUpContext);

  const showConfirmPopUp = useCallback(
    (confirmPopUpOptions: Omit<ConfirmPopUpOptions, 'popUpType'>) => {
      if (isShown) return;
      dispatch({
        type: SHOW_POP_UP,
        payload: { options: { ...confirmPopUpOptions, popUpType: 'CONFIRM' } },
      });
    },
    [isShown]
  );

  const showAlertPopUp = useCallback(
    (alertPopUpOptions: Omit<AlertPopUpOptions, 'popUpType'>) => {
      if (isShown) return;
      dispatch({
        type: SHOW_POP_UP,
        payload: { options: { ...alertPopUpOptions, popUpType: 'ALERT' } },
      });
    },
    [isShown]
  );

  const hidePopUp = useCallback(() => {
    if (!isShown) return;
    dispatch({ type: HIDE_POP_UP });
  }, [isShown]);

  return {
    isShown,
    options,
    showConfirmPopUp,
    showAlertPopUp,
    hidePopUp,
  };
};

export default usePopUp;
