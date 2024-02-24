import { combineReducers, configureStore } from '@reduxjs/toolkit';
import resumeSlice from './resumeSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer= combineReducers({resume: resumeSlice})

const persistedReducer = persistReducer(persistConfig, rootReducer )

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck : false})
})

export const persistor = persistStore(store)