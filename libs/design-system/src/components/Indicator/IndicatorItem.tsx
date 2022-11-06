import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Colors } from '../../styles/colors';

interface Props {
  enabled?: boolean;
  isLast?: boolean;
}

const IndicatorItem = ({ enabled = false, isLast = false }: Props) => (
  <View
    style={[
      styles.wrapper,
      {
        backgroundColor: enabled ? Colors.GRAY40 : Colors.GRAY20,
        marginRight: isLast ? 0 : 8,
      },
    ]}
  />
);

const styles = StyleSheet.create({
  wrapper: { width: 8, height: 8, borderRadius: 4 },
});

export default IndicatorItem;
