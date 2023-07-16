import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const statisticApi = createApi({
    reducerPath: "statisticApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000/api"
    }),
    endpoints(build): any {
        return {
            getDelays: build.query<string, void>({
                query: () => "/statistic/delays/",
            }),
            getFlights: build.query<string, void>({
                query: () => "/statistic/flights/"
            }),
            getTickets: build.query<string, void>({
                query: () => "/statistic/tickets/"
            }),
            getFinance: build.query<string, void>({
                query: () => "/statistic/finances/"
            })
        };
    }
});

export const { useGetDelaysQuery, useGetFlightsQuery, useGetTicketsQuery, useGetFinanceQuery } = statisticApi;
