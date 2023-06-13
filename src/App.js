import React from 'react';

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

const App = () => {
  return (
    <>
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
