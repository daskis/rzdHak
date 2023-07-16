import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {authApi} from '../features/api/authApi';
import {userApi} from '../features/api/userApi';
import {notificationApi} from '../features/api/notificationApi';
import userReducer from '../features/slices/userSlice';
import menuSlice from "../features/slices/menuSlice";
import screenSlice from "../features/slices/screenSlice";
import {statisticApi} from "../features/api/statisticApi";
import {mapApi} from "../features/api/mapApi";
import {stationApi} from "../features/api/stationApi";
import {ticketsApi} from "../features/api/ticketsApi";

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [notificationApi.reducerPath]: notificationApi.reducer,
        [statisticApi.reducerPath]: statisticApi.reducer,
        [ticketsApi.reducerPath]: ticketsApi.reducer,
        [stationApi.reducerPath]: stationApi.reducer,
        [mapApi.reducerPath]: mapApi.reducer,
        userState: userReducer,
        menu: menuSlice,
        screen: screenSlice
    },
    devTools: process.env.NODE_ENV === 'development',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware, userApi.middleware, ticketsApi.middleware, notificationApi.middleware, statisticApi.middleware, stationApi.middleware, mapApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


