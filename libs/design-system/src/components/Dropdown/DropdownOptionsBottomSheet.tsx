import React, { useEffect, useRef } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFlatList,
} from '@gorhom/bottom-sheet';

import { WINDOW_HEIGHT } from '~/constant/dimension';
import { useDropdown } from '~/hook/useDropdown';
import { Colors } from '../../styles/colors';
import { CheckOrangeIcon } from '~/util/assets';

import Typography from '../Typography';
import { Option } from './DropdownContext';

const BOTTOM_SHEET_DEFAULT_HEIGHT = 24 + 34; // 핸들 + 바텀시트 최하단
const OPTION_HEIGHT = 56;

export const DropdownOptionsBottomSheet = () => {
  const {
    getSelectedOption,
    selectDropdownOption,
    hideDropdown,
    dropdownOptions: items,
    focusedDropdownKey,
  } = useDropdown();

  const bottomSheetRef = useRef<BottomSheet>(null);

  const bottomSheetHeightTotal =
    BOTTOM_SHEET_DEFAULT_HEIGHT + OPTION_HEIGHT * (items || []).length;

  const handlePressOption = (item: Option) => {
    selectDropdownOption({
      value: item,
      dropdownKey: focusedDropdownKey,
    });
    hideDropdown();
  };

  useEffect(
    () =>
      (focusedDropdownKey || '').length
        ? bottomSheetRef.current?.snapToIndex(0)
        : bottomSheetRef.current?.close(),
    [focusedDropdownKey],
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={[
        bottomSheetHeightTotal > WINDOW_HEIGHT / 2
          ? bottomSheetHeightTotal - 44
          : bottomSheetHeightTotal,
      ]}
      onClose={hideDropdown}
      index={-1}
      handleIndicatorStyle={styles.handleIndicator}
      backdropComponent={props => (
        <BottomSheetBackdrop
          {...props}
          style={[props.style, styles.backdrop]}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          pressBehavior="close"
        />
      )}>
      <BottomSheetFlatList
        data={items}
        keyExtractor={({ label }) => label}
        renderItem={({ item }) => (
          <OptionItem
            item={item}
            handlePress={() => handlePressOption(item)}
            isSelected={
              getSelectedOption(focusedDropdownKey)?.value === item.value
            }
          />
        )}
      />
    </BottomSheet>
  );
};

const OptionItem = ({
  item,
  handlePress,
  isSelected,
}: {
  item: Option;
  handlePress: () => void;
  isSelected: boolean;
}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    key={item.label}
    onPress={handlePress}
    style={styles.option}>
    <Typography>{item.label}</Typography>
    {isSelected && <CheckOrangeIcon />}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  backdrop: { backgroundColor: Colors.BLACK, opacity: 0.4 },
  option: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  handleIndicator: {
    height: 4,
    borderRadius: 2,
    width: 38.4,
    backgroundColor: Colors.GRAY20,
  },
});
