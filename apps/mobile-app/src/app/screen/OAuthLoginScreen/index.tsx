import { Colors } from '@minion/design-system';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { ShouldStartLoadRequest } from 'react-native-webview/lib/WebViewTypes';

import Config from '../../config';
import { useAuth } from '../../hook/useAuth';
import { RootStackParamList } from '../../navigator/RootStackNavigator';

type ScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'OAuthLoginScreen'>;
type ScreenRouteProp = RouteProp<RootStackParamList, 'OAuthLoginScreen'>;

function OAuthLoginScreen() {
  const navigation = useNavigation<ScreenNavigationProp>();
  const { params } = useRoute<ScreenRouteProp>();

  const { login } = useAuth();

  const handleShouldStartLoadWithRequest = (e: ShouldStartLoadRequest) => {
    const { url } = e;

    const loginSuccess = url.includes('access_token');
    const loginFailed = url.includes('/fail');

    if (loginSuccess) {
      const paramsString = url.split('success?')[1];

      // TODO: Add URLSearchParams polyfill or separate as util
      const searchParams = {} as Record<string, string>;
      paramsString.split('&').forEach((param) => {
        const [key, value] = param.split('=');
        searchParams[key] = value;
      });

      const accessToken = searchParams.access_token;
      const refreshToken = searchParams.refresh_token;

      login({ accessToken, refreshToken });
      navigation.goBack();

      return false;
    }

    if (loginFailed) {
      const splitted = url.split('fail?');
      const oAuthId = splitted[splitted.length - 1];

      Alert.alert(`not registered, oAuthId: ${oAuthId}`);
      // TODO: navigate to sign up screen

      return false;
    }

    return true;
  };

  const handleError = () =>
    Alert.alert('', 'Something went wrong\nTry it again', [{ text: 'OK', onPress: () => navigation.goBack() }]);

  return (
    <WebView
      source={{
        uri: `${Config.API_ENDPOINT}/auth/login/${params.oAuthMethod}`,
      }}
      containerStyle={styles.container}
      style={styles.webView}
      originWhitelist={['*']}
      incognito
      onShouldStartLoadWithRequest={handleShouldStartLoadWithRequest}
      onError={handleError}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
  },
  webView: {
    flex: 1,
  },
});

export default OAuthLoginScreen;
