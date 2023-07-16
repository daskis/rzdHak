import React, {useEffect, useState} from 'react';
import Header from "./components/Header/Header";
import Router from "./components/Router/Router";
import Notification from "./firebase/Notification";
import {ConfigProvider} from "antd";
import {useDispatch} from "react-redux";
import {changeSize} from "./features/slices/screenSlice";

const App = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const dispatch = useDispatch()
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
        dispatch(changeSize(windowWidth))
    };
    useEffect(() => {

        window.addEventListener('resize', handleResize);

        // Очищаем слушателя событий при размонтировании компонента
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [windowWidth]);
    useEffect(() => {
        handleResize()
    }, [])
    return (
        <div className={"App"}>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#2e3033',
                    },
                }}
            >
                <Header/>
                <Router/>
                <Notification/>
            </ConfigProvider>
        </div>
    );
};

export default App;
// 1) Попапы
// Работа с билетами (спиздить с туту) и амокать возможность создания документа с экспортом цен, маршрута
// Кол-во билетов * рек. цену - Уведомление новый столбик
// Контроль цен у агригаторов
// Главная страница с статистикой и графиками