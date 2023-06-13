// import React from 'react';

// import {
//   initialWindowMetrics,
//   SafeAreaProvider,
// } from 'react-native-safe-area-context';

// // navigation
// import {RootNavigator} from './navigation/rootNavigator';

// import {
//   Provider as PaperProvider,
//   MD3LightTheme as DefaultTheme,
// } from 'react-native-paper';
// // redux setup
// import {Provider as StoreProvider} from 'react-redux';
// import {PersistGate} from 'redux-persist/integration/react';
// import {store, persistedStore} from './redux/store';

// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: '#567DF4',
//   },
// };

// const App = () => {
//   return (
//     <>
//       <StoreProvider store={store}>
//         <PersistGate persistor={persistedStore}>
//           <SafeAreaProvider initialMetrics={initialWindowMetrics}>
//             <PaperProvider theme={theme}>
//               <RootNavigator />
//             </PaperProvider>
//           </SafeAreaProvider>
//         </PersistGate>
//       </StoreProvider>
//     </>
//   );
// };

// export default App;

import React from 'react';
import {Text, View} from 'react-native';
import {RootNavigator} from './navigation/rootNavigator';

const App = () => {
  return <RootNavigator />;
};

export default App;
