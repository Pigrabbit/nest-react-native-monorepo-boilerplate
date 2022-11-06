import React, { PropsWithChildren } from 'react';
import { Pressable, PressableProps, StyleProp, ViewStyle } from 'react-native';

export interface ButtonBaseProps extends PressableProps {
  buttonStyle?: StyleProp<ViewStyle>;
}

const ButtonBase = ({
  buttonStyle,
  children,
  ...props
}: PropsWithChildren<ButtonBaseProps>) => {
  return (
    <Pressable style={buttonStyle} {...props}>
      {children}
    </Pressable>
  );
};

export default ButtonBase;
