import { configureStore } from "@reduxjs/toolkit";
import { dataApi } from "./dataApi";
import { postsApi } from "./postsApi";
import { busToursApi } from "./busToursApi";

export const store = configureStore({
  reducer: {
    [dataApi.reducerPath]: dataApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [busToursApi.reducerPath]: busToursApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
      .concat(dataApi.middleware)
      .concat(postsApi.middleware)
      .concat(busToursApi.middleware)
});