import { useCallback, useContext } from 'react';

import {
  DropdownContext,
  HIDE_DROPDOWN,
  INITIALIZE_DROPDOWN,
  Option,
  SELECT_OPTION,
  SHOW_DROPDOWN,
} from '../components/Dropdown/DropdownContext';

export const useDropdown = () => {
  const {
    state: { selectedOptions, dropdownOptions, focusedDropdownKey },
    dispatch,
  } = useContext(DropdownContext);

  const showDropdown = useCallback(
    ({
      options,
      initialValue,
      dropdownKey,
    }: {
      options: Option[];
      initialValue: Option | null;
      dropdownKey: string;
    }) => {
      dispatch({
        type: SHOW_DROPDOWN,
        payload: {
          dropdownOptions: options,
          selectedOption: initialValue,
          dropdownKey,
        },
      });
    },
    [dispatch]
  );

  const hideDropdown = useCallback(() => {
    dispatch({
      type: HIDE_DROPDOWN,
    });
  }, [dispatch]);

  const selectDropdownOption = useCallback(
    ({ value, dropdownKey }: { value: Option; dropdownKey?: string }) => {
      if (!dropdownKey) return;
      dispatch({
        type: SELECT_OPTION,
        payload: { selectedOption: value, dropdownKey },
      });
    },
    [dispatch]
  );

  const initializeDropdown = useCallback(() => {
    dispatch({
      type: INITIALIZE_DROPDOWN,
    });
  }, [dispatch]);

  const getSelectedOption = useCallback(
    (dropdownName) => selectedOptions?.[dropdownName] || null,
    [selectedOptions]
  );

  return {
    showDropdown,
    hideDropdown,
    selectDropdownOption,
    getSelectedOption,
    dropdownOptions,
    focusedDropdownKey,
    initializeDropdown,
  };
};
