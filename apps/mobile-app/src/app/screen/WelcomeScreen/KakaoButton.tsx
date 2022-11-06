import {
  Typography,
  ButtonBaseProps,
  ButtonBase,
  Colors,
} from '@minion/design-system';
import React, { useState } from 'react';
import { StyleProp, ViewStyle, View, StyleSheet } from 'react-native';

import { KakaoIcon } from '../../assets';

interface Props extends ButtonBaseProps {
  label: string | JSX.Element;
  style?: StyleProp<ViewStyle>;
}

const KakaoButton = ({ label, disabled, style, ...props }: Props) => {
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
        <KakaoIcon width="24" height="24" />
        <Typography
          variant="subtitle"
          fontWeight="bold"
          style={labelStyle.default}
        >
          {label}
        </Typography>
      </View>
    </ButtonBase>
  );
};

const buttonStyle = StyleSheet.create({
  default: {
    backgroundColor: '#FEE500',
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelWithIcon: { flexDirection: 'row', alignItems: 'center' },
});

const labelStyle = StyleSheet.create({
  default: {
    color: Colors.BLACK,
    marginLeft: 8,
  },
});

export default KakaoButton;
