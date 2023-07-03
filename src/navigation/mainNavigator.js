import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ChatScreen, RoomsScreen, SettingScreen} from '../screens';

const MainStack = createNativeStackNavigator();

export const MainNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name="rooms" component={RoomsScreen} />
      <MainStack.Screen name="chats" component={ChatScreen} />
      <MainStack.Screen name="setting" component={SettingScreen} />
    </MainStack.Navigator>
  );
};
