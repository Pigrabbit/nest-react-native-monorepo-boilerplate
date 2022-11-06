import { StyleSheet } from 'react-native';

import { Colors } from '../../../styles/colors';

const wrapperStyles = StyleSheet.create({
  popUp: {
    width: 268,
    borderRadius: 16,
    padding: 24,
    paddingTop: 32,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.WHITE,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOpacity: 0.2,
    shadowRadius: 60,
  },
  content: {
    alignItems: 'center',
    marginBottom: 32,
  },
  button: {
    flexDirection: 'row',
    width: '100%',
  },
});

const textContentStyles = StyleSheet.create({
  title: {
    marginBottom: 8,
    textAlign: 'center',
  },
  subDesc: {
    textAlign: 'center',
  },
});

const buttonStyles = StyleSheet.create({
  button: {
    flex: 1,
  },
});

export { wrapperStyles, textContentStyles, buttonStyles };
