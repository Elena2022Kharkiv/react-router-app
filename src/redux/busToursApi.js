import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = 'http://localhost:3001';

export const busToursApi = createApi({
  reducerPath: 'busToursApi', 
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Tours'],

  endpoints: ( build ) => ({

    getBusTours: build.query({
      query: () => 'busTours',
    })
  })
});

export const { useGetBusToursQuery } = busToursApi;
