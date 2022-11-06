import { StyleSheet } from 'react-native';

import { Colors } from '../../styles/colors';

const typographyStyles = StyleSheet.create({
  default: {
    color: Colors.GRAY90,
  },
  display: {
    fontSize: 56,
    lineHeight: 74,
  },
  h1: {
    fontSize: 40,
    lineHeight: 56,
  },
  h2: {
    fontSize: 36,
    lineHeight: 48,
  },
  h3: {
    fontSize: 32,
    lineHeight: 44,
  },
  h4: {
    fontSize: 28,
    lineHeight: 40,
  },
  h5: {
    fontSize: 24,
    lineHeight: 34,
  },
  h6: {
    fontSize: 20,
    lineHeight: 28,
  },
  title: {
    fontSize: 18,
    lineHeight: 24,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 22,
  },
  body: {
    fontSize: 14,
    lineHeight: 20,
  },
  description: {
    fontSize: 12,
    lineHeight: 18,
  },
  caption: {
    fontSize: 11,
    lineHeight: 14,
  },
  bold: {
    fontFamily: 'Pretendard-Bold',
    fontWeight: '700',
  },
  regular: {
    fontFamily: 'Pretendard-Regular',
    fontWeight: '400',
  },
});

export default typographyStyles;
