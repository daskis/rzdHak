import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const notificationApi = createApi({
    reducerPath: 'notificationApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000',
    }),
    endpoints: (build) => ({
        getNotifications: build.query({
            query: (token: string) => ({
                url: '/notifications',
                headers: {
                    Authorization: token,
                },
            }),
        }),
    }),
});

export const { useGetNotificationsQuery } = notificationApi;
