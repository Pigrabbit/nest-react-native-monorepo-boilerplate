import React, { PropsWithChildren } from 'react';
import {
  StatusBar,
  StatusBarStyle,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Colors } from '../../styles/colors';

interface Props {
  style?: StyleProp<ViewStyle>;
  statusBarStyle?: StatusBarStyle;
}

const Layout = ({
  children,
  style,
  statusBarStyle = 'dark-content',
}: PropsWithChildren<Props>) => {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <View style={[styles.wrapper, { paddingTop: top, paddingBottom: bottom }]}>
      <StatusBar
        barStyle={statusBarStyle}
        translucent
        backgroundColor="transparent"
      />
      <View style={[styles.body, style]}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  body: {
    flex: 1,
  },
});

export default Layout;
