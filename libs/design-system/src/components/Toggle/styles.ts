import { StyleSheet } from 'react-native';

import { Colors } from '../../styles/colors';

const containerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const toggleStyles = StyleSheet.create({
  default: {
    padding: 3,
    borderRadius: 50,
    width: 51,
    height: 32,
  },
  on: {
    backgroundColor: Colors.ORANGE70,
  },
  off: {
    backgroundColor: Colors.GRAY30,
  },
  disabled: {
    backgroundColor: Colors.GRAY20,
  },
});

const knobStyle = StyleSheet.create({
  default: {
    height: 26,
    width: 26,
    borderRadius: 50,
    backgroundColor: Colors.WHITE,
  },
  disabled: {
    backgroundColor: Colors.GRAY10,
  },
});

export { containerStyles, toggleStyles, knobStyle };
