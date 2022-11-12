import React, { useRef } from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screen/WelcomeScreen';
import MainTabNavigator from './MainTabNavigator';
import OAuthLoginScreen from '../screen/OAuthLoginScreen';
import { IconButton, CloseIcon } from '@minion/design-system';
import { useAuth } from '../hook/useAuth';

export type RootStackParamList = {
  WelcomeScreen: undefined;
  Main: undefined;
  OAuthLoginScreen: {
    oAuthMethod: 'kakao' | 'apple';
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  const { authenticated } = useAuth();

  const navigationRef =
    useRef<NavigationContainerRef<RootStackParamList>>(null);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        {authenticated ? (
          <Stack.Group>
            <Stack.Screen
              name="Main"
              component={MainTabNavigator}
              options={{ headerShown: false }}
            />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen
              name="WelcomeScreen"
              component={WelcomeScreen}
              options={{ header: () => null }}
            />
            <Stack.Screen
              name="OAuthLoginScreen"
              component={OAuthLoginScreen}
              options={{
                presentation: 'modal',
                headerTitle: '',
                headerRight: () => (
                  <IconButton
                    icon={() => <CloseIcon />}
                    onPress={() => navigationRef.current?.goBack()}
                  />
                ),
              }}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
