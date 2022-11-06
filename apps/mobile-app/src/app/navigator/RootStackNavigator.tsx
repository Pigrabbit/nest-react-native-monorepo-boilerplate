import React, { useRef, useState } from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screen/WelcomeScreen';
import MainTabNavigator from './MainTabNavigator';

export type RootStackParamList = {
  WelcomeScreen: undefined;
  Main: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  const [hasSignIn, setHasSignIn] = useState(false);

  const navigationRef =
    useRef<NavigationContainerRef<RootStackParamList>>(null);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        {hasSignIn ? (
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
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
