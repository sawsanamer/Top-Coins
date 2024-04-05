import { configureStore, combineReducers } from '@reduxjs/toolkit';
import coinsReducer from './coinsSlice';
import websocketMiddleware from '../middleware/websocketMiddleware/websocketMiddleware';

export const rootReducer = combineReducers({ coins: coinsReducer })

export const store = configureStore({
 reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(websocketMiddleware),
});

export type RootState = ReturnType<typeof rootReducer>;
