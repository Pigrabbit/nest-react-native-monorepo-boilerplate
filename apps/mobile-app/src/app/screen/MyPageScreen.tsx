import { Layout, TextSecondaryButton, Typography } from '@minion/design-system';
import React from 'react';
import { View, StyleSheet } from 'react-native';

import { useAuth } from '../hook/useAuth';

const MyPageScreen = () => {
  const { logout } = useAuth();
  return (
    <Layout style={styles.container}>
      <Typography variant="h2">My Page</Typography>
      <View style={{ flex: 1 }} />
      <TextSecondaryButton label={'Sign out'} onPress={logout} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});

export default MyPageScreen;
