import React from 'react';

import { AuthContextProvider } from './context/AuthContext';
import RootStackNavigator from './navigator/RootStackNavigator';
import AxiosInterceptor from './util/AxiosInterceptor';

export const App = () => {
  return (
    <AuthContextProvider>
      <AxiosInterceptor />
      <RootStackNavigator />
    </AuthContextProvider>
  );
};

export default App;
