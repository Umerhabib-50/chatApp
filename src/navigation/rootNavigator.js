import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';

// import navigators main screens
import {AuthNavigator} from './authNavigator';
import {MainNavigator} from './mainNavigator';
// import {MainNavigator} from './mainNavigator';

const RootStack = createNativeStackNavigator();

const RootStackContainer = () => {
  return (
    <RootStack.Navigator name="root" screenOptions={{headerShown: false}}>
      <RootStack.Screen name="mainStack" component={MainNavigator} />
    </RootStack.Navigator>
  );
};

export const RootNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStackContainer />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
