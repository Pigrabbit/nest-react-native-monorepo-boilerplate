import '@testing-library/jest-native/extend-expect';

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('react-native-keychain', () => ({
  SECURITY_LEVEL_ANY: 'MOCK_SECURITY_LEVEL_ANY',
  SECURITY_LEVEL_SECURE_SOFTWARE: 'MOCK_SECURITY_LEVEL_SECURE_SOFTWARE',
  SECURITY_LEVEL_SECURE_HARDWARE: 'MOCK_SECURITY_LEVEL_SECURE_HARDWARE',
  setGenericPassword: jest.fn().mockResolvedValue(''),
  getGenericPassword: jest.fn().mockResolvedValue({ password: JSON.stringify({}) }),
  resetGenericPassword: jest.fn().mockResolvedValue(''),
}));

jest.mock('@react-native-firebase/analytics', () => {
  return () => ({
    logEvent: jest.fn(),
    logScreenView: jest.fn(),
    logAppOpen: jest.fn(),
  });
});

jest.mock('@react-native-firebase/crashlytics', () => {
  return () => ({
    recordError: jest.fn(),
    setUserId: jest.fn(),
    setAttributes: jest.fn(),
  });
});

jest.mock('react-native-bootsplash', () => {
  return {
    hide: jest.fn(),
    getVisibilityStatus: jest.fn().mockResolvedValue('hidden'),
  };
});

jest.mock('react-native-code-push', () => {
  const codepush = () => (app) => app;
  Object.assign(codepush, {
    InstallMode: {},
    CheckFrequency: {},
    SyncStatus: {},
    UpdateState: {},
    DeploymentStatus: {},
    DEFAULT_UPDATE_DIALOG: {},
    allowRestart: jest.fn(),
    checkForUpdate: jest.fn(() => Promise.resolve(null)),
    disallowRestart: jest.fn(),
    getCurrentPackage: jest.fn(() => Promise.resolve(null)),
    getUpdateMetadata: jest.fn(() => Promise.resolve(null)),
    notifyAppReady: jest.fn(() => Promise.resolve()),
    restartApp: jest.fn(),
    sync: jest.fn(() => Promise.resolve(1)),
    clearUpdates: jest.fn(),
  });
  return codepush;
});
