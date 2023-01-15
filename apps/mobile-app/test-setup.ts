import '@testing-library/jest-native/extend-expect';

jest.mock('react-native-keychain', () => ({
  SECURITY_LEVEL_ANY: 'MOCK_SECURITY_LEVEL_ANY',
  SECURITY_LEVEL_SECURE_SOFTWARE: 'MOCK_SECURITY_LEVEL_SECURE_SOFTWARE',
  SECURITY_LEVEL_SECURE_HARDWARE: 'MOCK_SECURITY_LEVEL_SECURE_HARDWARE',
  setGenericPassword: jest.fn().mockResolvedValue(''),
  getGenericPassword: jest.fn().mockResolvedValue({ password: JSON.stringify({}) }),
  resetGenericPassword: jest.fn().mockResolvedValue(''),
}));
