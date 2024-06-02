import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "./postsApi";

export const storePosts = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsApi.middleware),
});
