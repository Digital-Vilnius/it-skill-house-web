import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { reducer as authReducer } from 'features/auth/slice';
import { reducer as contractorsReducer } from 'features/contractors/slice';
import { reducer as recruitersReducer } from 'features/recruiters/slice';
import { reducer as usersReducer } from 'features/users/slice';
import { reducer as technologiesReducer } from 'features/technologies/slice';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist/es/constants';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  contractors: contractorsReducer,
  recruiters: recruitersReducer,
  users: usersReducer,
  technologies: technologiesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const ignoredActions = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER];

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: { ignoredActions } }).concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
