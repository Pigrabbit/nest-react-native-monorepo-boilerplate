import React from 'react';
import { Pressable, PressableProps, StyleProp, View, ViewStyle } from 'react-native';

import { CheckIcon } from '../../styles/assets';
import Typography from '../Typography';
import { checkBoxStyles, containerStyles, labelStyles } from './styles';

interface Props extends PressableProps {
  isChecked: boolean;
  label?: React.ReactNode;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

const CheckBox = ({ isChecked, label, disabled, onPress, style, ...props }: Props) => {
  return (
    <Pressable {...props} style={[containerStyles.container, style]} onPress={(event) => onPress?.(event)}>
      <View
        style={[
          checkBoxStyles.default,
          isChecked ? checkBoxStyles.checked : checkBoxStyles.unchecked,
          disabled ? checkBoxStyles.disabled : {},
        ]}
      >
        {isChecked && <CheckIcon />}
      </View>
      <Typography style={[labelStyles.default, disabled ? labelStyles.disabled : {}]} variant="body">
        {label}
      </Typography>
    </Pressable>
  );
};

export default CheckBox;
