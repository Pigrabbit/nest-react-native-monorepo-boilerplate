import { StyleSheet } from 'react-native';

import { Colors } from '../../styles/colors';

const headerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    paddingHorizontal: 8,
    backgroundColor: Colors.WHITE,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.GRAY10,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '700',
    color: Colors.GRAY90,
  },
  leftContainer: {
    position: 'absolute',
    left: 8,
  },
  rightContainer: {
    position: 'absolute',
    right: 8,
  },
});

export default headerStyles;
