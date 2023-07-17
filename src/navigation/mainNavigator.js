import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ChangeSubjectScreen,
  ChatScreen,
  RoomsScreen,
  SettingScreen,
  StatusShow,
  StatusText,
  changeSub,
} from '../screens';
import {TabNavigationScreen} from '../screens/main/topTabNavigation';

const MainStack = createNativeStackNavigator();

export const MainNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name="tabNavigation" component={TabNavigationScreen} />
      {/* <MainStack.Screen name="rooms" component={RoomsScreen} /> */}
      <MainStack.Screen name="chats" component={ChatScreen} />
      <MainStack.Screen name="setting" component={SettingScreen} />
      <MainStack.Screen name="subChange" component={ChangeSubjectScreen} />
      <MainStack.Screen name="statusText" component={StatusText} />
      <MainStack.Screen name="statusShow" component={StatusShow} />
    </MainStack.Navigator>
  );
};
