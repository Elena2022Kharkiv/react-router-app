import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = 'http://localhost:3001';

export const postsApi = createApi({
  reducerPath: 'postsApi', 
  baseQuery: fetchBaseQuery({ baseUrl }),

  endpoints: ( build ) => ({

    getPosts: build.query({
      query: () => 'posts',
    })
  })

});

export const { useGetPostsQuery } = postsApi;
