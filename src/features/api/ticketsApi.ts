import {createApi} from "@reduxjs/toolkit/query/react";
import {fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const ticketsApi = createApi({
    reducerPath: "ticketsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000/api"
    }),
    endpoints(build): any {
        return {
            getTicketsInfo: build.query({
                query: () =>  `/tickets/`
            })
        }
    }
})
export const {useGetTicketsInfoQuery} = ticketsApi;