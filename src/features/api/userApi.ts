import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT || "http://10.2.0.48:8181";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/api`,

    }),
    endpoints: (builder) => ({
        getMe: builder.query({
            query: (token: string) => {
                return {
                    url: "/prices/test/",
                    headers: {
                        "Authorization": token,

                    }
                }
            }
        }),
    }),
});

export const {useGetMeQuery, useLazyGetMeQuery} = userApi;