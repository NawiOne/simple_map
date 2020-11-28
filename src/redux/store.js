import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import AsynStorage from '@react-native-community/async-storage';
import indexreducer from './reducer/index';
const persistConfig = {
  key: 'root',
  storage: AsynStorage,
};
const persistedReducer = persistReducer(persistConfig, indexreducer);

const logger = createLogger();
const enhancer = applyMiddleware(logger);
export default () => {
  let store = createStore(persistedReducer, enhancer);
  let persistor = persistStore(store);
  return {
    store,
    persistor,
  };
};
