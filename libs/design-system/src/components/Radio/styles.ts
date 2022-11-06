import { StyleSheet } from 'react-native';

import { Colors } from '../../styles/colors';

const containerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

const checkBoxStyles = StyleSheet.create({
  default: {
    borderWidth: 2,
    borderRadius: 50,
    width: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unselected: {
    borderColor: Colors.GRAY30,
  },
  selected: {
    borderWidth: 4,
    borderColor: Colors.ORANGE70,
  },
  disabled: {
    borderColor: Colors.GRAY20,
    backgroundColor: Colors.GRAY10,
  },
});

const labelStyles = StyleSheet.create({
  default: { marginLeft: 8 },
  disabled: { color: Colors.GRAY30 },
});

export { containerStyles, checkBoxStyles, labelStyles };
