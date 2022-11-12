import React from 'react';

import { AuthContextProvider } from './context/AuthContext';
import RootStackNavigator from './navigator/RootStackNavigator';

export const App = () => {
  return (
    <AuthContextProvider>
      <RootStackNavigator />
    </AuthContextProvider>
  );
};

export default App;
