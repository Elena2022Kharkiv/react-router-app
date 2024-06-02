import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = 'http://localhost:3001';

const postsTagObj = { type: 'Posts', id: 'LIST' };

export const postsApi = createApi({
  reducerPath: 'postsApi', 
  // reducerPath: 'usersApi', 
  // reducerPath: 'slidesApi', 
  // reducerPath: 'reviewApi', // отзывы
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Posts'],

  endpoints: ( build ) => ({

    getPosts: build.query({
      query: () => 'posts',
      providesTags: (result) => (
        result
          ? [
              ...result.map(( { id } ) => ( { type: 'Posts', id} )),
              postsTagObj
            ]
          : [ postsTagObj ]
      ),
    }),

    addGood: build.mutation({
      query: (body) => ({
        url: 'posts',
        method: 'POST',
        body,
      }),
      invalidatesTags: [ postsTagObj ]
    }),

  }),

});

export const { useGetPostsQuery } = postsApi;
