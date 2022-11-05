import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import MyPageScreen from '../screen/MyPageScreen';
import { PersonIcon, HomeIcon } from '../assets';

export type BottomTabParamList = {
  HomeScreen: undefined;
  MyPageScreen: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const MainTabNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <HomeIcon width={30} height={30} fill={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="MyPageScreen"
        component={MyPageScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'MyPage',
          tabBarIcon: ({ color }) => (
            <Image source={PersonIcon} style={{ tintColor: color }} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default MainTabNavigator;
