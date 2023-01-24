import { useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import CodePush from 'react-native-code-push';

import { logger } from '../util/logger';

export function useBootstrap() {
  const bootstrap = async () => {
    try {
      const remotePackage = await CodePush.checkForUpdate();
      if (remotePackage !== null) {
        const localPackage = await remotePackage.download();
        await localPackage.install(CodePush.InstallMode.IMMEDIATE);
      }
    } catch (error) {
      logger.error(error);
    } finally {
      await RNBootSplash.hide({ fade: true, duration: 500 });
      logger.log('hide splash screen');
    }
  };

  useEffect(() => {
    bootstrap();
  }, []);
}
