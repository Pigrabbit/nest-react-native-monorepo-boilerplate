import React, { useEffect, useState } from 'react';
import { Layout, Typography } from '@minion/design-system';
import { getMe } from '../api/user';

const HomeScreen = () => {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    getMe().then((data) => setUsername(data?.username));
  }, []);

  return (
    <Layout>
      <Typography variant="h2">{`Hello ${username || ''}`} </Typography>
    </Layout>
  );
};

export default HomeScreen;
