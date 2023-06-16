import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ChatScreen,
  JoinRoomAsScreen,
  RoomsScreen,
  UserJoinRoomScreen,
} from '../screens';

const MainStack = createNativeStackNavigator();

export const MainNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name="rooms" component={RoomsScreen} />
      <MainStack.Screen name="joinroomas" component={JoinRoomAsScreen} />
      {/* <MainStack.Screen name="userjoinroom" component={UserJoinRoomScreen} /> */}
      <MainStack.Screen name="chats" component={ChatScreen} />
    </MainStack.Navigator>
  );
};
