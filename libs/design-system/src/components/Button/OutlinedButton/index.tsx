import React, { useState } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import Typography from '../../Typography';
import ButtonBase, { ButtonBaseProps } from '../ButtonBase';
import { buttonStyle, labelStyle } from './style';

interface Props extends ButtonBaseProps {
  label: string | JSX.Element;
  size?: 'large' | 'small';
  style?: StyleProp<ViewStyle>;
}

const OutlinedButton = ({ label, disabled, size = 'large', style, ...props }: Props) => {
  const [isPressed, setIsPressed] = useState(false);

  const isLarge = size === 'large';

  return (
    <ButtonBase
      {...props}
      buttonStyle={[
        buttonStyle.default,
        isLarge ? buttonStyle.large : buttonStyle.small,
        disabled ? buttonStyle.disabled : {},
        isPressed ? buttonStyle.pressed : buttonStyle.normal,
        style,
      ]}
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
      {typeof label === 'string' ? (
        <Typography
          variant={isLarge ? 'subtitle' : 'description'}
          fontWeight="bold"
          style={disabled ? labelStyle.disabled : labelStyle.enabled}
        >
          {label}
        </Typography>
      ) : (
        label
      )}
    </ButtonBase>
  );
};

export default OutlinedButton;
