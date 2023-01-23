import * as Sentry from '@sentry/react-native';
import React from 'react';

import Config from './config';
import { AuthContextProvider } from './context/AuthContext';
import RootStackNavigator from './navigator/RootStackNavigator';
import AxiosInterceptor from './util/AxiosInterceptor';

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
  return (
    <AuthContextProvider>
      <AxiosInterceptor />
      <Sentry.TouchEventBoundary>
        <RootStackNavigator />
      </Sentry.TouchEventBoundary>
    </AuthContextProvider>
  );
};

export default Sentry.wrap(App);
