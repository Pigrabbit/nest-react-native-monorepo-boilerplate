import React, { useState } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import { IconType } from '../../../styles/assets';
import ButtonBase, { ButtonBaseProps } from '../ButtonBase';
import { buttonStyle } from './styles';

interface Props extends ButtonBaseProps {
  icon: IconType;
  style?: StyleProp<ViewStyle>;
}

const IconButton = ({ icon, disabled, style, ...props }: Props) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <ButtonBase
      {...props}
      style={[buttonStyle.default, style]}
      disabled={disabled}
      onPressIn={(e) => {
        props.onPressIn?.(e);
        setIsPressed(true);
      }}
      onPressOut={(e) => {
        props.onPressOut?.(e);
        setIsPressed(false);
      }}
    >
      {/* @ts-expect-error svg prop */}
      {icon}
    </ButtonBase>
  );
};

export default IconButton;
