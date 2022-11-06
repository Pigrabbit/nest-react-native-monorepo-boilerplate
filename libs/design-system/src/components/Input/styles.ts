import { StyleSheet } from 'react-native';

import { Colors } from '../../styles/colors';

const wrapperStyles = StyleSheet.create({
  inputWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

const textInputStyles = StyleSheet.create({
  primary: {
    flex: 1,
    height: 44,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderColor: Colors.GRAY30,
    color: Colors.GRAY90,
  },
  error: {
    borderColor: Colors.RED70,
  },
  focused: { borderColor: Colors.ORANGE70 },
  disabled: {
    borderColor: Colors.GRAY20,
    backgroundColor: Colors.GRAY10,
    color: Colors.GRAY50,
  },
});

const subDescStyles = StyleSheet.create({
  primary: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400',
    marginTop: 8,
    paddingLeft: 6,
    color: Colors.GRAY90,
  },
  error: { color: Colors.RED70 },
  disabled: { color: Colors.GRAY50 },
});

const suffixStyles = StyleSheet.create({
  primary: {
    position: 'absolute',
    right: 0,
    paddingRight: 16,
  },
});

export { wrapperStyles, textInputStyles, subDescStyles, suffixStyles };
