import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import styles from "./NotificationPage.module.scss"
import TableComponent from "../TableComponent/TableComponent";
import {ColumnsType} from "antd/es/table";

const onChange = (key: string) => {
    console.log(key);
};

export interface DataType {
    key: string;
    train: string;
    from: string;
    to: string;
    now: string;
    date: string;
    tickets: number;
    ticketAmount: number;
    recomendAmount: number;
    placAmount: number;
    serviceAmount: number;
    totalAmount: number;
    recomendTotalAmount: number;
    distance: number;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Поезд/Нитка',
        dataIndex: 'train',
        key: 'train',
    },
    {
        title: 'Станция отправления',
        dataIndex: 'from',
        key: 'from',
    },
    {
        title: 'Станция назначения',
        dataIndex: 'to',
        key: 'to',
    },
    {
        title: 'Станция сейчас',
        key: 'now',
        dataIndex: 'now',
    },
    {
        title: 'Дата отправления/прибытия',
        key: 'date',
        dataIndex: "date"
    },
    {
        title: 'Кол-во проданных билетов',
        key: 'tickets',
        dataIndex: "tickets"
    },
    {
        title: 'Сумма по бил.',
        key: 'ticketAmount',
        dataIndex: "ticketAmount"
    },
    {
        title: 'Рекомменд. стоимость',
        key: 'recomendAmount',
        dataIndex: "recomendAmount"
    },
    {
        title: 'Сумма по плац.',
        key: 'placAmount',
        dataIndex: "placAmount"
    },
    {
        title: 'Сумма серв. услуг',
        key: 'serviceAmount',
        dataIndex: "serviceAmount"
    },
    {
        title: 'Итого сумма билета',
        key: 'totalAmount',
        dataIndex: "totalAmount"
    },
    {
        title: 'Рекомменд. итог. стоимость',
        key: 'recomendTotalAmount',
        dataIndex: "recomendTotalAmount"
    },
    {
        title: 'Расстояние',
        key: 'distance',
        dataIndex: "distance"
    },

];

const data: DataType[] = [
    {
        key: '1',
        train: 'Западно-сибирская',
        from: 'Москва',
        to: 'Санкт-Петербург',
        now: 'Тверь',
        date: '2023-07-15 / 2023-07-16',
        tickets: 50,
        ticketAmount: 1500,
        recomendAmount: 2000,
        placAmount: 500,
        serviceAmount: 100,
        totalAmount: 1600,
        recomendTotalAmount: 2100,
        distance: 800,
    },
    {
        key: '2',
        train: 'Уральская',
        from: 'Екатеринбург',
        to: 'Тюмень',
        now: 'Пермь',
        date: '2023-07-16 / 2023-07-17',
        tickets: 30,
        ticketAmount: 1200,
        recomendAmount: 1800,
        placAmount: 400,
        serviceAmount: 80,
        totalAmount: 1280,
        recomendTotalAmount: 1880,
        distance: 500,
    },
    // Добавьте остальные объекты данных в массив
];


const items: TabsProps['items'] = [
    {
        key: '1',
        label: `Все`,
        //@ts-ignore
        children: <TableComponent dataSource={data} columns={columns} />,
    },
    {
        key: '2',
        label: `Новые`,
        //@ts-ignore
        children: <TableComponent dataSource={data} columns={columns} />,
    },
    {
        key: '3',
        label: `Рассмотренные`,
        //@ts-ignore
        children: <TableComponent dataSource={data} columns={columns} />,
    },
    {
        key: '4',
        label: `Решены`,
        //@ts-ignore
        children: <TableComponent dataSource={data} columns={columns} />,
    },
];

const NotificationPage: React.FC = () => {
    return (
        <div className={styles.Wrapper}>
            <Tabs defaultActiveKey="1" size={"large"} items={items} tabPosition={"left"} onChange={onChange} />
        </div>
    )
};

export default NotificationPage;