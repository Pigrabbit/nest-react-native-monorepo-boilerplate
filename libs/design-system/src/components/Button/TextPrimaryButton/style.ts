import { StyleSheet } from 'react-native';

import { Colors } from '../../../styles/colors';

export const labelStyle = StyleSheet.create({
  normal: {
    color: Colors.ORANGE70,
    textAlign: 'center',
  },
  pressed: {
    color: Colors.ORANGE90,
  },
  disabled: {
    color: Colors.ORANGE20,
  },
});
