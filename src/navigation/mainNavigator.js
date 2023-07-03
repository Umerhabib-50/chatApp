import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ChangeSubjectScreen,
  ChatScreen,
  RoomsScreen,
  SettingScreen,
  changeSub,
} from '../screens';

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
      <MainStack.Screen name="subChange" component={ChangeSubjectScreen} />
    </MainStack.Navigator>
  );
};
