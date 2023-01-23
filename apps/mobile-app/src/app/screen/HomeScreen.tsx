import { Layout, Typography } from '@minion/design-system';
import crashlytics from '@react-native-firebase/crashlytics';
import * as Sentry from '@sentry/react-native';
import React, { useEffect, useState } from 'react';

import { getMe } from '../api/user';

const HomeScreen = () => {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    getMe().then(async (data) => {
      setUsername(data.username);

      Sentry.setUser({ id: data.id, username: data.username, email: data.email });
      await Promise.all([
        crashlytics().setUserId(data.id),
        crashlytics().setAttributes({
          username: data.username,
          email: data.email,
        }),
      ]);
    });
  }, []);

  return (
    <Layout>
      <Typography variant="h2">{`Hello ${username || ''}`} </Typography>
    </Layout>
  );
};

export default HomeScreen;
