import React, { useState } from 'react';
import { StyleProp, ViewStyle, View } from 'react-native';

import ButtonBase, { ButtonBaseProps } from '../ButtonBase';
import { buttonStyle, labelStyle } from './style';

import Typography from '~/component/Typography';
import { AppleIcon } from '~/util/assets';

interface Props extends ButtonBaseProps {
  label: string | JSX.Element;
  style?: StyleProp<ViewStyle>;
}

const AppleButton = ({ label, disabled, style, ...props }: Props) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <ButtonBase
      {...props}
      buttonStyle={[buttonStyle.default, style]}
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
      <View style={buttonStyle.labelWithIcon}>
        <AppleIcon width="24" height="24" />
        <Typography variant="subtitle" fontWeight="bold" style={labelStyle.default}>
          {label}
        </Typography>
      </View>
    </ButtonBase>
  );
};

export default AppleButton;
