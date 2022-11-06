import React, { PropsWithChildren } from 'react';
import { Omit, StyleProp, Text, TextProps, TextStyle } from 'react-native';

import typographyStyles from './styles';

interface Props extends TextProps {
  variant?:
    | 'display'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'title'
    | 'subtitle'
    | 'body'
    | 'description'
    | 'caption';
  fontWeight?: 'bold' | 'regular';
  style?: StyleProp<
    Omit<TextStyle, 'fontWeight' | 'fontFamily' | 'fontSize' | 'lineHeight'>
  >;
}

const Typography = ({
  variant = 'body',
  fontWeight = 'regular',
  style,
  children,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <Text
      style={[
        typographyStyles.default,
        style,
        typographyStyles[variant],
        typographyStyles[fontWeight],
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export default Typography;
