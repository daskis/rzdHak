import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { userApi } from './userApi';

const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT || "http://localhost:4000";

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:4000/api/auth/`,
    }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query(data) {
                return {
                    url: 'register',
                    method: 'POST',
                    body: data,
                };
            },
        }),
        loginUser: builder.mutation({
            query(data) {
                return {
                    url: 'login',
                    method: 'POST',
                    body: data,
                    credentials: 'include',
                };
            },
        }),
        logoutUser: builder.mutation<void, void>({
            query() {
                return {
                    url: 'logout',
                    credentials: 'include',
                };
            },
        }),
    }),
});

export const {
    useLoginUserMutation,
    useRegisterUserMutation,
    useLogoutUserMutation,
} = authApi;
