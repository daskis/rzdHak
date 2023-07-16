import React from 'react';
import {Tabs, TabsProps, Typography} from "antd";
import Finance from "./Charts/Finance";
import Tickets from "./Charts/Tickets";
import Flights from "./Charts/Flights";
import Delays from "./Charts/Delays";
import styles from "./MainPage.module.scss"
const MainPage = () => {
    const tabs: TabsProps['items'] = [
        {
            key: "1",
            label: "Билеты",
            children: <Tickets/>
        },
        {
            key: "2",
            label: "Финансы",
            children: <Finance/>
        },
        {
            key: "3",
            label: "Рейсы",
            children: <Flights/>
        },
        {
            key: "4",
            label: "Задержки",
            children: <Delays/>
        },
    ]
    return (
        <div className={styles.wrapper}>
            <Typography.Title style={{textAlign: "center"}} level={2}>Статистика за 30 дней по рейсу Москва-Адлер</Typography.Title>
            <Tabs size={"large"} centered defaultActiveKey="1" items={tabs} />
        </div>
    );
};

export default MainPage;