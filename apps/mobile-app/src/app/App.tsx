import * as Sentry from '@sentry/react-native';
import React from 'react';
import codePush, { CodePushOptions } from 'react-native-code-push';

import Config from './config';
import { AuthContextProvider } from './context/AuthContext';
import { useAppState } from './hook/useAppState';
import RootStackNavigator from './navigator/RootStackNavigator';
import AxiosInterceptor from './util/AxiosInterceptor';

const codePushOptions: CodePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.ON_NEXT_RESUME,
};

export const routingInstrumentation = new Sentry.ReactNavigationInstrumentation();

Sentry.init({
  dsn: Config.SENTRY_DSN,
  integrations: [
    new Sentry.ReactNativeTracing({
      routingInstrumentation,
      tracingOrigins: ['localhost', /^\//, /^https:\/\//],
    }),
  ],
  environment: Config.ENV || 'development',
  tracesSampleRate: Config.ENV === 'production' ? 0.2 : 1.0,
  attachScreenshot: true,
});

export const App = () => {
  useAppState();

  return (
    <AuthContextProvider>
      <AxiosInterceptor />
      <Sentry.TouchEventBoundary>
        <RootStackNavigator />
      </Sentry.TouchEventBoundary>
    </AuthContextProvider>
  );
};

export default codePush(codePushOptions)(Sentry.wrap(App));
