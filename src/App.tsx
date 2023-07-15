import React from 'react';
import Header from "./components/Header/Header";
import Router from "./components/Router/Router";
import Notification from "./firebase/Notification";
import {ConfigProvider} from "antd";
import {Toaster} from "react-hot-toast";

const App = () => {
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
