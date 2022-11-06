import { StyleSheet } from 'react-native';

import { Colors } from '../../../styles/colors';

export const buttonStyle = StyleSheet.create({
  default: {
    paddingHorizontal: 14.5,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
  },
  small: { height: 44 },
  large: { height: 48 },
  normal: {
    borderColor: Colors.GRAY30,
  },
  pressed: {
    borderColor: Colors.GRAY40,
  },
  disabled: {
    backgroundColor: Colors.GRAY30,
  },
});

export const labelStyle = StyleSheet.create({
  disabled: { color: Colors.GRAY10 },
  enabled: { color: Colors.BLACK },
});
