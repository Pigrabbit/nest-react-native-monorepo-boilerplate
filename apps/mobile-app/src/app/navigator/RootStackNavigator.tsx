import { IconButton, CloseIcon } from '@minion/design-system';
import analytics from '@react-native-firebase/analytics';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useRef } from 'react';

import { routingInstrumentation } from '../App';
import { useAuth } from '../hook/useAuth';
import { useBootstrap } from '../hook/useBootstrap';
import OAuthLoginScreen from '../screen/OAuthLoginScreen';
import SignUpCompletedScreen from '../screen/SignUpCompletedScreen';
import SignUpEmailFormScreen from '../screen/SignUpEmailFormScreen';
import SignUpNameFormScreen from '../screen/SignUpNameFormScreen';
import WelcomeScreen from '../screen/WelcomeScreen';
import MainTabNavigator from './MainTabNavigator';

export type RootStackParamList = {
  WelcomeScreen: undefined;
  Main: undefined;
  OAuthLoginScreen: {
    oAuthMethod: 'KAKAO' | 'APPLE' | 'LOCAL';
  };
  SignUpNameFormScreen: {
    oAuthMethod: 'KAKAO' | 'APPLE' | 'LOCAL';
    oAuthId: string;
  };
  SignUpEmailFormScreen: {
    oAuthMethod: 'KAKAO' | 'APPLE' | 'LOCAL';
    oAuthId: string;
    username: string;
  };
  SignUpCompletedScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  useBootstrap();
  const { authenticated } = useAuth();

  const navigationRef = useRef<NavigationContainerRef<RootStackParamList>>(null);
  const routeNameRef = useRef<string | undefined>();

  const handleChangeNavigationState = async () => {
    const prevRouteName = routeNameRef.current;
    const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;

    if (prevRouteName !== currentRouteName) {
      await analytics().logScreenView({
        screen_name: currentRouteName,
        screen_class: currentRouteName,
      });
    }
    routeNameRef.current = currentRouteName;
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name;
        routingInstrumentation.registerNavigationContainer(navigationRef);
      }}
      onStateChange={handleChangeNavigationState}
    >
      <Stack.Navigator>
        {authenticated ? (
          <Stack.Group>
            <Stack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false }} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ header: () => null }} />
            <Stack.Screen
              name="OAuthLoginScreen"
              component={OAuthLoginScreen}
              options={{
                presentation: 'modal',
                headerTitle: '',
                headerRight: () => (
                  <IconButton icon={() => <CloseIcon />} onPress={() => navigationRef.current?.goBack()} />
                ),
              }}
            />
            <Stack.Screen
              name="SignUpNameFormScreen"
              component={SignUpNameFormScreen}
              options={{ header: () => null }}
            />
            <Stack.Screen
              name="SignUpEmailFormScreen"
              component={SignUpEmailFormScreen}
              options={{ header: () => null }}
            />
            <Stack.Screen
              name="SignUpCompletedScreen"
              component={SignUpCompletedScreen}
              options={{ header: () => null }}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
