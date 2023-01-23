import { Layout, Typography } from '@minion/design-system';
import * as Sentry from '@sentry/react-native';
import React, { useEffect, useState } from 'react';

import { getMe } from '../api/user';

const HomeScreen = () => {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    getMe().then((data) => {
      setUsername(data.username);
      Sentry.setUser({ username: data.username, email: data.email });
    });
  }, []);

  return (
    <Layout>
      <Typography variant="h2">{`Hello ${username || ''}`} </Typography>
    </Layout>
  );
};

export default HomeScreen;
