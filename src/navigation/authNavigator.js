import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import all screens here
import {LoginScreen, RegisterScreen} from '../screens';

const AuthStack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: 'white'},
      }}>
      {/* <AuthStack.Screen name="landing" component={LandingScreen} /> */}
      {/* <AuthStack.Screen name="onBord" component={OnBoardingScreen} />
      <AuthStack.Screen name="role" component={RoleScreen} /> */}
      <AuthStack.Screen name="register" component={RegisterScreen} />
      {/* <AuthStack.Screen name="login" component={LoginScreen} /> */}
      {/* <AuthStack.Screen name="forgot" component={ForgotScreen} /> */}
    </AuthStack.Navigator>
  );
};
