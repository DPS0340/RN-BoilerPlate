import {combineReducers} from 'redux';
import {all} from 'redux-saga/effects';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import counter from './counter';
import storageSession from 'redux-persist/lib/storage/session';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [''],
};
const rootReducer = combineReducers({counter});
export default persistReducer(persistConfig, rootReducer);
export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([]);
}
