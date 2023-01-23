import Config from 'react-native-config';

interface AppConfig {
  API_ENDPOINT: string;
  ENV: string;
  SENTRY_DSN: string;
}

export default Config as unknown as AppConfig;
