import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore, persistReducer} from 'redux-persist';
// import storage from "redux-persist/lib/storage";
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './reducers/rootReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: ['userLogin'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(thunk),
  // rootReducer,
  // composeWithDevTools(applyMiddleware(thunk)),
);

export const persistedStore = persistStore(store);
