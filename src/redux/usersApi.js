import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = 'http://localhost:3001';

const usersTagObj = { type: 'Users', id: 'LIST' };

export const usersApi = createApi({
  reducerPath: 'usersApi', 
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Users'],

  endpoints: ( build ) => ({

    getUsers: build.query({
      query: () => 'users',
      providesTags: (result) => (
        result
          ? [
              ...result.map(( { id } ) => ( { type: 'Users', id} )),
              usersTagObj
            ]
          : [ usersTagObj ]
      ),
    }),

    addUsers: build.mutation({
      query: (body) => ({
        url: 'users',   // 'http://localhost:3001/users'
        method: 'POST',
        body,
      }),
      invalidatesTags: [ usersTagObj ]
    }),

  }),

});

export const { useGetUsersQuery, useAddUsersMutation } = usersApi;
