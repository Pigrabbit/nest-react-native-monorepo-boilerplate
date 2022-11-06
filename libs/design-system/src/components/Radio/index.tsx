import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';

import Typography from '../Typography';
import { checkBoxStyles, containerStyles, labelStyles } from './styles';

interface Props extends PressableProps {
  isSelected: boolean;
  label?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

const Radio = ({
  isSelected,
  label,
  disabled,
  onPress,
  style,
  ...props
}: Props) => {
  return (
    <Pressable
      {...props}
      style={[containerStyles.container, style]}
      onPress={event => onPress?.(event)}
    >
      <View
        style={[
          checkBoxStyles.default,
          isSelected ? checkBoxStyles.selected : checkBoxStyles.unselected,
          disabled ? checkBoxStyles.disabled : {},
        ]}
      />
      <Typography
        style={[labelStyles.default, disabled ? labelStyles.disabled : {}]}
        variant="body"
      >
        {label}
      </Typography>
    </Pressable>
  );
};

export default Radio;
