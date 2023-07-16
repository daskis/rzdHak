import React from 'react';
import {Routes, Route} from "react-router-dom"
import MainPage from "../../pages/MainPage/MainPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import MapPage from "../../pages/MapPage/MapPage";
import Outlet from "../Outlet/Outlet";
import ChangesPage from "../../pages/ChangesPage/ChangesPage";
import styles from "./Router.module.scss"
import NotificationPage from "../../pages/NotificationPage/NotificationPage";
import StationPage from "../../pages/StationPage/StationPage";
import TicketsPage from "../../pages/TicketsPage/TicketsPage";
export const routerLinks = [
    {
        label: "Главная",
        link: "/",
        element: <MainPage/>
    },
    {
        label: "Карта маршрутов",
        link: "/map",
        element: <MapPage/>
    },
    {
        label: "Информация",
        link: "/info",
        element: <ChangesPage/>
    },
    {
        label: "Регистрация",
        link: "/auth/register",
        element: <RegisterPage/>
    },
    {
        label: "Вход",
        link: "/auth/login",
        element: <LoginPage/>
    },
    {
        label: "Уведомления",
        link: "/notifications",
        element: <NotificationPage/>
    },
    {
        label: "Изменения маршрутов",
        link: "/changes",
        element: <ChangesPage/>
    },
    {
        label: "Станция",
        link: "/station/:stationId",
        element: <StationPage/>
    },
    {
        label: "Билеты",
        link: "/tickets",
        element: <TicketsPage/>
    },
]
const AppContent = () => {
    return (
        <div className={styles.Router}>
            <Routes>
                {routerLinks.map((item, i) => (
                    <Route path={item.link} element={item.element} key={item.label}/>
                ))}
            </Routes>
            <Outlet/>
        </div>

    );
};

export default AppContent;