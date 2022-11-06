import React, { useState } from 'react';

import Typography from '../../Typography';

import ButtonBase, { ButtonBaseProps } from '../ButtonBase';
import { labelStyle } from './style';

interface Props extends ButtonBaseProps {
  label: string | JSX.Element;
  size?: 'large' | 'small';
}

const TextSecondaryButton = ({
  label,
  disabled,
  size = 'large',
  ...props
}: Props) => {
  const [isPressed, setIsPressed] = useState(false);

  const isLarge = size === 'large';

  return (
    <ButtonBase
      {...props}
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
        variant={isLarge ? 'subtitle' : 'description'}
        fontWeight="bold"
        style={[
          labelStyle.normal,
          disabled ? labelStyle.disabled : {},
          isPressed ? labelStyle.pressed : {},
        ]}
      >
        {label}
      </Typography>
    </ButtonBase>
  );
};

export default TextSecondaryButton;
