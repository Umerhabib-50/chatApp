import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SingleChatScreen, UsersScreen} from '../screens';

const MainStack = createNativeStackNavigator();

export const MainNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name="users" component={UsersScreen} />
      <MainStack.Screen name="singleUser" component={SingleChatScreen} />
      {/* <MainStack.Screen name="drawerStack" component={DrawerNavigator} /> */}
    </MainStack.Navigator>
  );
};
