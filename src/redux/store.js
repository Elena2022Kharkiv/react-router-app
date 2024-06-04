import { configureStore } from "@reduxjs/toolkit";
import { dataApi } from "./dataApi";
import { postsApi } from "./postsApi";
import { busToursApi } from "./busToursApi";
import { cartApi } from "./cartApi";

export const store = configureStore({
  reducer: {
    [dataApi.reducerPath]: dataApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [busToursApi.reducerPath]: busToursApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
      .concat(dataApi.middleware)
      .concat(postsApi.middleware)
      .concat(busToursApi.middleware)
      .concat(cartApi.middleware)
});
