import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';

import headerStyles from './styles';

interface Props {
  title?: string;
  headerLeft?: ReactNode;
  headerRight?: ReactNode;
  borderBottom?: boolean;
}

const Header = ({
  title,
  headerLeft,
  headerRight,
  borderBottom = false,
}: Props) => {
  return (
    <View
      style={[
        headerStyles.container,
        borderBottom && headerStyles.borderBottom,
      ]}
    >
      {headerLeft ? (
        <View style={headerStyles.leftContainer}>{headerLeft}</View>
      ) : null}
      <View style={headerStyles.titleContainer} pointerEvents="none">
        <Text
          style={headerStyles.title}
          allowFontScaling={false}
          numberOfLines={1}
        >
          {title}
        </Text>
      </View>
      {headerRight ? (
        <View style={headerStyles.rightContainer}>{headerRight}</View>
      ) : null}
    </View>
  );
};

export default Header;
