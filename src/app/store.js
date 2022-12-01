import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import {counterAPI} from '../app/api';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [counterAPI.reducerPath]: counterAPI.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(counterAPI.middleware),
});
