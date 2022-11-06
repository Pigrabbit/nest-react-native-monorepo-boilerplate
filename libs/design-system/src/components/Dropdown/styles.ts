import { StyleSheet } from 'react-native';

import { Colors } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  dropdown: {
    backgroundColor: Colors.GRAY20,
    borderRadius: 100,
    paddingVertical: 6,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textDisabled: { color: Colors.GRAY40 },
});

export default styles;
