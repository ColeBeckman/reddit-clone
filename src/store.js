import { configureStore } from '@reduxjs/toolkit';
import { redditApi } from './features/api/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
export const store = configureStore({
  reducer: {
    [redditApi.reducerPath]: redditApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(redditApi.middleware),
});

setupListeners(store.dispatch);