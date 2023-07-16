import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const mapApi = createApi({
    reducerPath: "maqApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000/api"
    }),
    endpoints(build): any {
        return {
            getMapInfo: build.query<string, void>({
                query: () => "/map/"
            })
        }
    }
})
export const {useGetMapInfoQuery} = mapApi;