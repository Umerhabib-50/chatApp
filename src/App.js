import React, {useEffect, useState} from 'react';

import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

// navigation
import {RootNavigator} from './navigation/rootNavigator';

// redux setup
import {Provider as StoreProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistedStore} from './redux/store';
import {StatusBar, View} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
const App = () => {
  useEffect(() => {
    // StatusBar.setBackgroundColor((Color = '#006257'));
    StatusBar.setBackgroundColor((Color = '#128c7e'));
  }, []);
  let arr = [{name: 'rehan'}, {name: 'rehan'}, {name: 'rehan'}];
  return (
    <>
      {/* <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <CircularProgress
          value={10}
          activeStrokeWidth={4}
          inActiveStrokeWidth={4}
          progressValueColor={'#ecf0f1'}
          radius={33}
          // activeStrokeColor={'#2465FD'}

          titleFontSize={15}
          progressValueStyle={{display: 'none'}}
          dashedStrokeConfig={{
            count: arr.length,
            width: 230 / arr.length - 10,
          }}
        />
      </View> */}
      <StoreProvider store={store}>
        <PersistGate persistor={persistedStore}>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <RootNavigator />
          </SafeAreaProvider>
        </PersistGate>
      </StoreProvider>
    </>
  );
};

export default App;
