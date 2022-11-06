import { StyleSheet } from 'react-native';

import { Colors } from '../../styles/colors';

const buttonStyle = StyleSheet.create({
  default: {
    backgroundColor: '#FEE500',
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelWithIcon: { flexDirection: 'row', alignItems: 'center' },
});

const labelStyle = StyleSheet.create({
  default: {
    color: Colors.BLACK,
    marginLeft: 8,
  },
});

export { buttonStyle, labelStyle };
