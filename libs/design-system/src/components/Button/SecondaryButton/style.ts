import { StyleSheet } from 'react-native';

import { Colors } from '../../../styles/colors';

export const buttonStyle = StyleSheet.create({
  default: {
    paddingHorizontal: 14.5,
    borderRadius: 8,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
  },
  normal: {
    backgroundColor: Colors.ORANGE20,
    borderColor: Colors.ORANGE20,
  },
  pressed: {
    backgroundColor: Colors.ORANGE40,
    borderColor: Colors.ORANGE40,
  },
  disabled: {
    backgroundColor: Colors.ORANGE40,
    borderColor: Colors.ORANGE40,
  },
});

export const labelStyle = StyleSheet.create({
  disabled: { color: Colors.ORANGE20 },
  enabled: { color: Colors.ORANGE70 },
});
