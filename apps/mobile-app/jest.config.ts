module.exports = {
  displayName: 'mobile-app',
  preset: 'react-native',
  resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html', 'tsx', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
  moduleNameMapper: {
    '.svg': '@nrwl/react-native/plugins/jest/svg-mock',
    '^@nest-react-native-monorepo/domain': '<rootDir>/../../dist/libs/domain/src/index.js',
    '^@nest-react-native-monorepo/data-interface': '<rootDir>/../../dist/libs/data-interface/src/index.js',
  },
  transformIgnorePatterns: ['node_modules/(?!react-native|react-navigation)/'],
};
