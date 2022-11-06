import React, { useState } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import Typography from '../../Typography';

import ButtonBase, { ButtonBaseProps } from '../ButtonBase';
import { buttonStyle, labelStyle } from './style';

interface Props extends ButtonBaseProps {
  label: string | JSX.Element;
  style?: StyleProp<ViewStyle>;
}

const PrimaryButton = ({ label, disabled, style, ...props }: Props) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <ButtonBase
      {...props}
      buttonStyle={[
        buttonStyle.default,
        isPressed ? buttonStyle.pressed : buttonStyle.normal,
        disabled ? buttonStyle.disabled : {},
        style,
      ]}
      disabled={disabled}
      onPressIn={e => {
        props.onPressIn?.(e);
        setIsPressed(true);
      }}
      onPressOut={e => {
        props.onPressOut?.(e);
        setIsPressed(false);
      }}
    >
      <Typography
        variant="subtitle"
        fontWeight="bold"
        style={disabled ? labelStyle.disabled : labelStyle.enabled}
      >
        {label}
      </Typography>
    </ButtonBase>
  );
};

export default PrimaryButton;
