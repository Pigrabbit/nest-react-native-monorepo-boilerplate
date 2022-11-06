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
    borderRadius: 3,
    width: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unchecked: {
    borderColor: Colors.GRAY30,
  },
  checked: {
    borderColor: Colors.ORANGE70,
    backgroundColor: Colors.ORANGE70,
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
