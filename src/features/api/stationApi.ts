import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const stationApi = createApi({
    reducerPath: "maqApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000/api"
    }),
    endpoints(build) {
        return {
            getStationInfo: build.query<any, number>({
                query: (stationId : any):any =>  `/station/${stationId}`
            })
        };
    }
});
export const { useGetStationInfoQuery } = stationApi;
