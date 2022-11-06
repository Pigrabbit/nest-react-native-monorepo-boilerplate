/* eslint-disable jsx-a11y/accessible-emoji */
import {
  Layout,
  OutlinedButton,
  TextPrimaryButton,
  Typography,
} from '@minion/design-system';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppleButton from './AppleButton';
import KakaoButton from './KakaoButton';

const WelcomeScreen = () => {
  return (
    <Layout style={styles.container}>
      <Typography variant="h2">Welcome MobileApp 👋</Typography>
      <View style={{ flex: 1 }} />
      <KakaoButton label="카카오톡으로 계속" style={styles.loginButton} />
      <AppleButton label="Apple로 계속" style={styles.loginButton} />
      <OutlinedButton
        label={'회원가입'}
        style={styles.loginButton}
        // onPress={() => bottomSheetRef.current?.snapToIndex(0)}
      />
      <TextPrimaryButton
        label={'로그인'}
        style={styles.loginButton}
        // onPress={() => navigation.navigate('LoginScreen')}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  loginButton: {
    marginBottom: 12,
  },
});

export default WelcomeScreen;
