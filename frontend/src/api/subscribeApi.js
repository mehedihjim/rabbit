import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const subscribeApi = createApi({
  reducerPath: "subscribeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL, // <-- Vite syntax
  }),
  tagTypes: ["Subscriber"],
  endpoints: (builder) => ({
    subscribeUser: builder.mutation({
      query: (email) => ({
        url: "/subscribe",
        method: "POST",
        body: { email },
      }),
      invalidatesTags: ["Subscriber"],
    }),
    getSubscribers: builder.query({
      query: () => "/subscribe",
      providesTags: ["Subscriber"],
    }),
  }),
});

export const { useSubscribeUserMutation, useGetSubscribersQuery } =
  subscribeApi;
