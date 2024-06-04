import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = 'http://localhost:3001';

const cartTagObj = { type: 'Cart', id: 'LIST' };

export const cartApi = createApi({
  reducerPath: 'cartApi', 
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Cart'],

  endpoints: ( build ) => ({

    getCart: build.query({
      query: () => 'cart',
      providesTags: (result) => (
        result
          ? [
              ...result.map(( { id } ) => ( { type: 'Cart', id} )),
              cartTagObj
            ]
          : [ cartTagObj ]
      ),
    }),

    addCart: build.mutation({
      query: (body) => ({
        url: 'cart',
        method: 'POST',
        body,
      }),
      invalidatesTags: [ cartTagObj ]
    }),

  })

});

export const { useGetCartQuery, useAddCartMutation } = cartApi;
