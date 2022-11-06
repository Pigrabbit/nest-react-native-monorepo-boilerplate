import React, { PropsWithChildren } from 'react';
import { View, ViewStyle } from 'react-native';

import Typography from '../Typography';
import style from './styles';

interface TableProps {
  tableStyle?: ViewStyle;
}

interface RowProps {
  header: string;
  data: string | number;
  rowStyle?: ViewStyle;
}

const Table = ({ children, tableStyle }: PropsWithChildren<TableProps>) => (
  <View style={[style.tableWrapper, tableStyle]}>{children}</View>
);

const Row = ({ header, data, rowStyle }: RowProps) => (
  <View style={[style.rowWrapper, rowStyle]}>
    <Typography style={style.text}>{header}</Typography>
    <Typography style={style.text} fontWeight="bold">
      {data}
    </Typography>
  </View>
);

export { Table, Row };
