import { StyleSheet } from 'react-native';

import { Colors } from '../../styles/colors';

const style = StyleSheet.create({
  tableWrapper: { paddingHorizontal: 16 },
  rowWrapper: {
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: Colors.GRAY90,
  },
});

export default style;
