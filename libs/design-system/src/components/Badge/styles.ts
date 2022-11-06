import { StyleSheet } from 'react-native';

import { Colors } from '../../styles/colors';

const containerStyles = StyleSheet.create({
  default: { alignItems: 'flex-start' },
});

const badgeStyles = StyleSheet.create({
  default: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    height: 18,
    borderRadius: 4,
  },
  orange: { backgroundColor: Colors.ORANGE20 },
  green: { backgroundColor: Colors.GREEN20 },
  red: { backgroundColor: Colors.RED20 },
  gray: { backgroundColor: Colors.GRAY20 },
});

const labelStyles = StyleSheet.create({
  orange: { color: Colors.ORANGE70 },
  green: { color: Colors.GREEN70 },
  red: { color: Colors.RED70 },
  gray: { color: Colors.GRAY50 },
});

export { containerStyles, badgeStyles, labelStyles };
