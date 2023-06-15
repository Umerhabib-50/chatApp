import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AddChatRoomScreen, SingleChatScreen, UsersScreen} from '../screens';

const MainStack = createNativeStackNavigator();

export const MainNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name="users" component={UsersScreen} />
      <MainStack.Screen name="addRoom" component={AddChatRoomScreen} />
      <MainStack.Screen name="single" component={SingleChatScreen} />
    </MainStack.Navigator>
  );
};
