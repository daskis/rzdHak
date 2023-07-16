import React, {useEffect} from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import styles from "./NotificationPage.module.scss"
import TableComponent from "../../components/TableComponent/TableComponent";
import {ColumnsType} from "antd/es/table";
import {useSelector} from "react-redux";
import {useGetNotificationsQuery} from "../../features/api/notificationApi";

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

const notificationData: DataType[] = [
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
    {
        key: '3',
        train: 'Байкал',
        from: 'Москва',
        to: 'Иркутск',
        now: 'Нижний Новгород',
        date: '2023-07-18 / 2023-07-19',
        tickets: 25,
        ticketAmount: 1500,
        recomendAmount: 2000,
        placAmount: 300,
        serviceAmount: 100,
        totalAmount: 1600,
        recomendTotalAmount: 2100,
        distance: 4000,
    },
    {
        key: '4',
        train: 'Волжская',
        from: 'Самара',
        to: 'Казань',
        now: 'Ульяновск',
        date: '2023-07-20 / 2023-07-21',
        tickets: 15,
        ticketAmount: 800,
        recomendAmount: 1200,
        placAmount: 200,
        serviceAmount: 80,
        totalAmount: 880,
        recomendTotalAmount: 1280,
        distance: 300,
    },
    {
        key: '5',
        train: 'Амур',
        from: 'Хабаровск',
        to: 'Владивосток',
        now: 'Благовещенск',
        date: '2023-07-22 / 2023-07-23',
        tickets: 20,
        ticketAmount: 2000,
        recomendAmount: 2500,
        placAmount: 500,
        serviceAmount: 100,
        totalAmount: 2100,
        recomendTotalAmount: 2600,
        distance: 800,
    },
    {
        key: '6',
        train: 'Таймыр',
        from: 'Красноярск',
        to: 'Норильск',
        now: 'Ачинск',
        date: '2023-07-24 / 2023-07-25',
        tickets: 10,
        ticketAmount: 600,
        recomendAmount: 900,
        placAmount: 300,
        serviceAmount: 60,
        totalAmount: 660,
        recomendTotalAmount: 960,
        distance: 400,
    },
    {
        key: '7',
        train: 'Ладожский',
        from: 'Санкт-Петербург',
        to: 'Мурманск',
        now: 'Псков',
        date: '2023-07-26 / 2023-07-27',
        tickets: 5,
        ticketAmount: 1200,
        recomendAmount: 1500,
        placAmount: 300,
        serviceAmount: 100,
        totalAmount: 1300,
        recomendTotalAmount: 1600,
        distance: 1000,
    },
    {
        key: '8',
        train: 'Алтай',
        from: 'Новосибирск',
        to: 'Барнаул',
        now: 'Кемерово',
        date: '2023-07-28 / 2023-07-29',
        tickets: 12,
        ticketAmount: 1000,
        recomendAmount: 1300,
        placAmount: 300,
        serviceAmount: 60,
        totalAmount: 1060,
        recomendTotalAmount: 1360,
        distance: 200,
    },
    {
        key: '9',
        train: 'Байкал',
        from: 'Иркутск',
        to: 'Улан-Удэ',
        now: 'Ангарск',
        date: '2023-07-30 / 2023-07-31',
        tickets: 8,
        ticketAmount: 900,
        recomendAmount: 1200,
        placAmount: 300,
        serviceAmount: 60,
        totalAmount: 960,
        recomendTotalAmount: 1260,
        distance: 500,
    },
    {
        key: '10',
        train: 'Уральская',
        from: 'Тюмень',
        to: 'Екатеринбург',
        now: 'Челябинск',
        date: '2023-08-01 / 2023-08-02',
        tickets: 18,
        ticketAmount: 1100,
        recomendAmount: 1500,
        placAmount: 400,
        serviceAmount: 80,
        totalAmount: 1180,
        recomendTotalAmount: 1580,
        distance: 300,
    },
    {
        key: '11',
        train: 'Кубанская',
        from: 'Ростов-на-Дону',
        to: 'Краснодар',
        now: 'Волгодонск',
        date: '2023-08-03 / 2023-08-04',
        tickets: 14,
        ticketAmount: 700,
        recomendAmount: 1000,
        placAmount: 300,
        serviceAmount: 70,
        totalAmount: 770,
        recomendTotalAmount: 1070,
        distance: 200,
    },
    {
        key: '12',
        train: 'Дальневосточная',
        from: 'Владивосток',
        to: 'Хабаровск',
        now: 'Находка',
        date: '2023-08-05 / 2023-08-06',
        tickets: 22,
        ticketAmount: 1800,
        recomendAmount: 2300,
        placAmount: 500,
        serviceAmount: 120,
        totalAmount: 1920,
        recomendTotalAmount: 2420,
        distance: 600,
    }
    // Добавьте остальные объекты данных в массив
];


const items: TabsProps['items'] = [
    {
        key: '1',
        label: `Все`,
        //@ts-ignore
        children: <TableComponent dataSource={notificationData} columns={columns} />,
    },
    {
        key: '2',
        label: `Новые`,
        //@ts-ignore
        children: <TableComponent dataSource={notificationData} columns={columns} />,
        disabled: true
    },
    {
        key: '3',
        label: `Рассмотренные`,
        //@ts-ignore
        children: <TableComponent dataSource={notificationData} columns={columns} />,
        disabled: true
    },
    {
        key: '4',
        label: `Решены`,
        //@ts-ignore
        children: <TableComponent dataSource={notificationData} columns={columns} />,
        disabled: true
    },
];

const NotificationPage: React.FC = () => {
    const { data, error, isLoading } = useGetNotificationsQuery('your-token-here');
    useEffect(() => {
        if (data) {
            console.log(data)
        }
    }, [])
    const windowWidth = useSelector((state: any) => state.screen.width)
    return (
        <div className={styles.Wrapper}>
            <Tabs defaultActiveKey="1" size={windowWidth > 500 ? "large" : "small"} items={items} tabPosition={windowWidth > 768 ? "left" : "top"} onChange={onChange} />
        </div>
    )
};

export default NotificationPage;