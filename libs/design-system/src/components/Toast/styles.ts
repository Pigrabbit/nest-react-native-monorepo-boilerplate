import { StyleSheet } from 'react-native';

import { WINDOW_WIDTH } from '../../styles/dimension';
import { Colors } from '../../styles/colors';

export const toastStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    // TODO: bottom tab 위쪽에 위치할 수 있도록 수치 조정 필요.
    bottom: 150,
    left: 20,
    maxWidth: WINDOW_WIDTH - 32,
    height: 44,
    flexDirection: 'row',
    backgroundColor: Colors.GRAY70,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    zIndex: 999,
  },
  message: {
    marginLeft: 8,
    color: Colors.WHITE,
  },
});
