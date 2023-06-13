import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const MainStack = createNativeStackNavigator();

export const MainNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <MainStack.Screen name="drawerStack" component={DrawerNavigator} /> */}
    </MainStack.Navigator>
  );
};
