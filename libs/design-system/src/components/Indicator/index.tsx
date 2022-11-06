import React from 'react';
import { StyleSheet, View } from 'react-native';

import IndicatorItem from './IndicatorItem';

interface Props {
  pages: (string | number | Record<string, unknown>)[];
  enabledIndex: number;
}

const Indicator = ({ pages, enabledIndex }: Props) =>
  Array.isArray(pages) ? (
    <View style={styles.wrapper}>
      {pages.map((page, idx) => (
        <IndicatorItem
          key={idx}
          enabled={idx === enabledIndex}
          isLast={idx === pages.length - 1}
        />
      ))}
    </View>
  ) : null;

const styles = StyleSheet.create({
  wrapper: { flexDirection: 'row' },
});

export default Indicator;
