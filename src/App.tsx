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
                        colorPrimary: '#cf1322',
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
