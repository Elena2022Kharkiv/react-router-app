import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = 'http://localhost:3001';

const toursTagObj = { type: 'Tours', id: 'LIST' };

export const dataApi = createApi({
  reducerPath: 'dataApi', 
  // reducerPath: 'usersApi', 
  // reducerPath: 'slidesApi', 
  // reducerPath: 'reviewApi', // отзывы
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Tours'],

  endpoints: ( build ) => ({

    // getPosts: build.query({
    //   query: () => 'posts',
    // }),

    getTours: build.query({
      query: () => 'tours',
      providesTags: (result) => (
        result
          ? [
              ...result.map(( { id } ) => ( { type: 'Tours', id} )),
              toursTagObj
            ]
          : [ toursTagObj ]
      ),
    }),

    addTours: build.mutation({
      query: (body) => ({
        url: 'tours',
        method: 'POST',
        body,
      }),
      invalidatesTags: [ toursTagObj ]
    }),

  }),

});

export const { useGetToursQuery, useAddToursMutation } = dataApi;
