import React, { useCallback } from 'react';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';

import { useFocusEffect } from '@react-navigation/core';

import { useDropdown } from '../../hooks/useDropdown';
import {
  ArrowDownBlackIcon,
  ArrowDownGrayIcon,
  ArrowUpBlackIcon,
} from '../../styles/assets';

import Typography from '../Typography';
import { Option } from './DropdownContext';
import styles from './styles';

interface Props {
  options: Option[];
  name: string;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

const Dropdown = ({ options, name: key, disabled, style }: Props) => {
  /**
   *  NOTE:
   * 드롭다운 옵션 및 선택한 값은 react context로 관리한다.
   * 스크린의 하위 요소인 드롭다운 버튼과
   * 전역 바텀시트 형태인 옵션 목록이 같은 값(selectedOption)을 참조하기 때문
   */
  const {
    getSelectedOption,
    showDropdown,
    initializeDropdown,
    focusedDropdownKey,
  } = useDropdown();

  useFocusEffect(
    useCallback(() => {
      /**
       * 전역 context로 드롭다운 선택값을 관리하고 있기 때문에
       * unmount 시 context의 옵션 및 선택값을 초기화 해 주어야 함
       */
      return initializeDropdown;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  );

  const renderDropdownArrow = () => {
    const iconProps = {
      width: 16,
      height: 16,
    };

    if (disabled) return <ArrowDownGrayIcon {...iconProps} />;
    if (focusedDropdownKey === key) return <ArrowUpBlackIcon {...iconProps} />;
    return <ArrowDownBlackIcon {...iconProps} />;
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.8}
      style={[styles.container, style]}
      onPress={() => {
        showDropdown({
          options,
          dropdownKey: key,
          initialValue: getSelectedOption(key) || options[0],
        });
      }}
    >
      <View style={styles.dropdown}>
        <Typography
          variant="description"
          fontWeight="bold"
          style={disabled ? styles.textDisabled : {}}
        >
          {getSelectedOption(key)?.label || options[0].label}
        </Typography>
        {renderDropdownArrow()}
      </View>
    </TouchableOpacity>
  );
};

export default Dropdown;
