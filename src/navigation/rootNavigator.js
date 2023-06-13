import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';

// import navigators main screens
import {AuthNavigator} from './authNavigator';
// import {MainNavigator} from './mainNavigator';

const RootStack = createNativeStackNavigator();

const RootStackContainer = () => {
  // const userInfo = useSelector(state => state?.userLogin);
  // const token = userInfo?.userInfo?.data?.token;
  // const token = false;
  return (
    <RootStack.Navigator name="root" screenOptions={{headerShown: false}}>
      {/* <RootStack.Screen name="mainStack" component={MainNavigator} /> */}
      <RootStack.Screen name="authStack" component={AuthNavigator} />
    </RootStack.Navigator>
    // <RootStack.Navigator name="root" screenOptions={{headerShown: false}}>
    //   {token ? (
    //     <>
    //       {/* <RootStack.Screen name="drawerStack" component={DrawerNavigator} /> */}
    //       <RootStack.Screen name="mainStack" component={MainNavigator} />
    //     </>
    //   ) : (
    //     <>
    //       <RootStack.Screen name="authStack" component={AuthNavigator} />
    //     </>
    //   )}
    //   {/* <RootStack.Screen
    //     name="Home"
    //     component={HomeScreen}
    //     options={{title: 'Overview'}}
    //   /> */}
    // </RootStack.Navigator>
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
