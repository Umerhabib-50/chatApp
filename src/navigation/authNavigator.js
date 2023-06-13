import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import all screens here
import {RegisterScreen, LoginScreen} from '../screens';

const AuthStack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: 'white'},
      }}>
      <AuthStack.Screen name="register" component={RegisterScreen} />
      <AuthStack.Screen name="login" component={LoginScreen} />
    </AuthStack.Navigator>
  );
};
