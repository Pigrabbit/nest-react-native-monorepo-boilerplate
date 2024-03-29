/* eslint-disable jsx-a11y/accessible-emoji */
import { Layout, Typography } from '@minion/design-system';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { RootStackParamList } from '../../navigator/RootStackNavigator';
import AppleButton from './AppleButton';
import KakaoButton from './KakaoButton';

type ScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'WelcomeScreen'>;

const WelcomeScreen = () => {
  const navigation = useNavigation<ScreenNavigationProp>();
  return (
    <Layout style={styles.container}>
      <Typography variant="h2" testID="welcome-heading">
        Welcome 👋
      </Typography>
      <View style={{ flex: 1 }} />
      <KakaoButton
        label="Sign in with Kakao"
        style={styles.loginButton}
        onPress={() => navigation.navigate('OAuthLoginScreen', { oAuthMethod: 'KAKAO' })}
      />
      <AppleButton
        label="Sign in with Apple"
        style={styles.loginButton}
        onPress={() => navigation.navigate('OAuthLoginScreen', { oAuthMethod: 'APPLE' })}
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
