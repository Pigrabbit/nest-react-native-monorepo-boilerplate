import { StyleSheet } from 'react-native';

import { Colors } from '../../../styles/colors';

export const labelStyle = StyleSheet.create({
  normal: {
    color: Colors.GRAY90,
    textAlign: 'center',
  },
  pressed: {
    color: Colors.BLACK,
  },
  disabled: {
    color: Colors.GRAY30,
  },
});
