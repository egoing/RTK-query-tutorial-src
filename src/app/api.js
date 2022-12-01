import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const counterAPI = createApi({
  reducerPath: 'counterAPI',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  tagTypes:['Counter'],
  endpoints: (builder) => ({
    getCounter: builder.query({
        query: () => `counter`,
        providesTags: ['Counter'],
    }),
    updateCounter: builder.mutation({
        query: (count) => {
            return {
                url:'counter',
                method: 'PATCH',
                body: {value:count}
            }
        },
        invalidatesTags: ['Counter'],
    }),
  }),
})

export const { useGetCounterQuery, useUpdateCounterMutation } = counterAPI

