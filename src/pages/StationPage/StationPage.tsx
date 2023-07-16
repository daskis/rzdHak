import React, {useEffect} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {Table, Tabs, Tag, Typography} from "antd";
import styles from "./StationPage.module.scss"
import {ArrowLeftOutlined} from "@ant-design/icons";
import type {TabsProps} from 'antd';
import {useGetStationInfoQuery} from "../../features/api/stationApi";

const {TabPane} = Tabs;
const StationPage = () => {
    const stationInfo = {
        name: "Краснодар 1",
        stationId: 1,
        routes: [
            {
                value: "msk-adl",
                label: "Москва — Адлер",
                distance: "1669 км",
                duration: "24 часа",
                stops: ["Тула", "Воронеж", "Ростов-на-Дону", "Краснодар"],
            },
            {
                value: "msk-bel",
                label: "Москва — Белгород",
                distance: "700 км",
                duration: "10 часов",
                stops: ["Липецк", "Воронеж"],
            },
            {
                value: "msk-spb",
                label: "Москва — Санкт-Петербург",
                distance: "650 км",
                duration: "4 часа",
                stops: ["Тверь"],
            },
            {
                value: "msk-nov",
                label: "Москва — Новосибирск",
                distance: "3388 км",
                duration: "52 часа",
                stops: ["Владимир", "Нижний Новгород", "Екатеринбург", "Омск", "Томск"],
            },
            {
                value: "spb-kras",
                label: "Санкт-Петербург — Красноярск",
                distance: "4282 км",
                duration: "64 часа",
                stops: ["Вологда", "Киров", "Пермь", "Екатеринбург", "Омск"],
            },
            {
                value: "ekb-kaz",
                label: "Екатеринбург — Казань",
                distance: "614 км",
                duration: "10 часов",
                stops: ["Пермь", "Ижевск"],
            },
            {
                value: "sochi-rost",
                label: "Сочи — Ростов-на-Дону",
                distance: "701 км",
                duration: "12 часов",
                stops: ["Краснодар"],
            },
            {
                value: "nn-vlad",
                label: "Нижний Новгород — Владивосток",
                distance: "9191 км",
                duration: "144 часа",
                stops: ["Казань", "Пермь", "Екатеринбург", "Омск", "Новосибирск", "Хабаровск"],
            },
            {
                value: "msk-volg",
                label: "Москва — Волгоград",
                distance: "969 км",
                duration: "18 часов",
                stops: ["Рязань", "Пенза", "Саратов"],
            },
            {
                value: "kras-irk",
                label: "Красноярск — Иркутск",
                distance: "1094 км",
                duration: "20 часов",
                stops: ["Тайшет"],
            },
            {
                value: "sam-sar",
                label: "Самара — Саратов",
                distance: "386 км",
                duration: "6 часов",
                stops: ["Балаково"],
            },
            {
                value: "kaz-nur",
                label: "Казань — Нур-Султан",
                distance: "1586 км",
                duration: "24 часа",
                stops: ["Екатеринбург", "Омск", "Павлодар"],
            },
            {
                value: "omsk-tomsk",
                label: "Омск — Томск",
                distance: "367 км",
                duration: "6 часов",
                stops: ["Колпашево"],
            },
        ],
        schedule: [
            {
                trainNumber: "303",
                departure: "Москва",
                destination: "Екатеринбург",
                departureTime: "10:15",
                arrivalTime: "20:30",
                intermediateStations: ["Казань", "Пермь"],
                travelTime: "10 ч 15 мин",
                frequency: "Ежедневно",
                trainType: "Скорый",
                prices: {
                    economy: 2500,
                    business: 4000
                }
            },
            {
                trainNumber: "404",
                departure: "Екатеринбург",
                destination: "Москва",
                departureTime: "09:30",
                arrivalTime: "19:45",
                intermediateStations: ["Пермь", "Казань"],
                travelTime: "10 ч 15 мин",
                frequency: "Ежедневно",
                trainType: "Скорый",
                prices: {
                    economy: 2400,
                    business: 3800
                }
            },
            {
                trainNumber: "505",
                departure: "Москва",
                destination: "Ростов-на-Дону",
                departureTime: "12:00",
                arrivalTime: "22:30",
                intermediateStations: ["Воронеж", "Курск"],
                travelTime: "10 ч 30 мин",
                frequency: "Ежедневно",
                trainType: "Скорый",
                prices: {
                    economy: 1800,
                    business: 3000
                }
            },
            {
                trainNumber: "606",
                departure: "Ростов-на-Дону",
                destination: "Москва",
                departureTime: "10:15",
                arrivalTime: "20:45",
                intermediateStations: ["Курск", "Воронеж"],
                travelTime: "10 ч 30 мин",
                frequency: "Ежедневно",
                trainType: "Скорый",
                prices: {
                    economy: 1700,
                    business: 2900
                }
            },
            {
                trainNumber: "707",
                departure: "Москва",
                destination: "Нижний Новгород",
                departureTime: "07:45",
                arrivalTime: "10:20",
                intermediateStations: [],
                travelTime: "2 ч 35 мин",
                frequency: "Ежедневно",
                trainType: "Пассажирский",
                prices: {
                    economy: 800,
                    business: 1200
                }
            },
            {
                trainNumber: "808",
                departure: "Нижний Новгород",
                destination: "Москва",
                departureTime: "18:30",
                arrivalTime: "21:05",
                intermediateStations: [],
                travelTime: "2 ч 35 мин",
                frequency: "Ежедневно",
                trainType: "Пассажирский",
                prices: {
                    economy: 800,
                    business: 1200
                }
            },
            {
                trainNumber: "909",
                departure: "Москва",
                destination: "Сочи",
                departureTime: "06:20",
                arrivalTime: "17:45",
                intermediateStations: ["Ростов-на-Дону", "Краснодар"],
                travelTime: "11 ч 25 мин",
                frequency: "Ежедневно",
                trainType: "Скорый",
                prices: {
                    economy: 2100,
                    business: 3500
                }
            },
            {
                trainNumber: "1010",
                departure: "Сочи",
                destination: "Москва",
                departureTime: "08:10",
                arrivalTime: "19:35",
                intermediateStations: ["Краснодар", "Ростов-на-Дону"],
                travelTime: "11 ч 25 мин",
                frequency: "Ежедневно",
                trainType: "Скорый",
                prices: {
                    economy: 2000,
                    business: 3400
                }
            },
            {
                trainNumber: "1111",
                departure: "Москва",
                destination: "Казань",
                departureTime: "11:20",
                arrivalTime: "15:40",
                intermediateStations: [],
                travelTime: "4 ч 20 мин",
                frequency: "Ежедневно",
                trainType: "Пассажирский",
                prices: {
                    economy: 1000,
                    business: 1500
                }
            },
            {
                trainNumber: "1212",
                departure: "Казань",
                destination: "Москва",
                departureTime: "16:50",
                arrivalTime: "21:10",
                intermediateStations: [],
                travelTime: "4 ч 20 мин",
                frequency: "Ежедневно",
                trainType: "Пассажирский",
                prices: {
                    economy: 1000,
                    business: 1500
                }
            }
        ],
        availableCars: [
            {
                trainNumber: "101",
                cars: [
                    {
                        carNumber: "A1",
                        carType: "Спальный",
                        availableSeats: 10,
                        price: 1500
                    },
                    {
                        carNumber: "B1",
                        carType: "Купейный",
                        availableSeats: 20,
                        price: 1000
                    },
                ]
            },
            {
                trainNumber: "202",
                cars: [
                    {
                        carNumber: "A1",
                        carType: "Спальный",
                        availableSeats: 5,
                        price: 1400
                    },
                    {
                        carNumber: "B1",
                        carType: "Купейный",
                        availableSeats: 15,
                        price: 900
                    },
                ]
            },
        ],
        arrivedTrains: [
            {
                trainNumber: "101",
                arrivalStation: "Москва",
                arrivalTime: "13:30",
                originStation: "Санкт-Петербург",
                originTime: "08:00",
                delay: 0
            },
            {
                trainNumber: "202",
                arrivalStation: "Санкт-Петербург",
                arrivalTime: "20:15",
                originStation: "Москва",
                originTime: "14:45",
                delay: 0
            },
        ]
    }
    const {stationId} = useParams()
    const navigate = useNavigate()
    // @ts-ignore
    // const { data, error, endpointName, isLoading } = useGetStationInfoQuery(stationId)
    //
    // useEffect(() => {
    //     console.log(endpointName)
    //     console.log(data, error, isLoading)
    // }, [])

    const onChange = (key: string) => {
        console.log(key);
    };


    const {name, routes, schedule, availableCars, arrivedTrains} = stationInfo;

    const trainColumns = [
        {
            title: 'Номер поезда',
            dataIndex: 'trainNumber',
            key: 'trainNumber',
        },
    ];
    const carColumns = [
        {
            title: 'Номер вагона',
            dataIndex: 'carNumber',
            key: 'carNumber',
            render: (text:any) => <Tag color="blue">{text}</Tag>,
        },
        {
            title: 'Тип вагона',
            dataIndex: 'carType',
            key: 'carType',
            render: (text:any) => <Tag color="green">{text}</Tag>,
        },
        {
            title: 'Доступные места',
            dataIndex: 'availableSeats',
            key: 'availableSeats',
        },
        {
            title: 'Цена',
            dataIndex: 'price',
            key: 'price',
        },
    ];
    const trainData = availableCars.map((train) => ({
        trainNumber: train.trainNumber,
        key: train.trainNumber,
        cars: train.cars,
    }));


    return (
        <div className={styles.wrapper}>
            <Link to="/" className={styles.goBack} style={{display: "flex", alignItems: "center", marginBottom: 16}}>
                <Typography.Link>
                    <ArrowLeftOutlined style={{marginRight: 8}}/>
                    Назад
                </Typography.Link>
            </Link>
            <Typography.Title className={styles.title} level={2}>{name}</Typography.Title>
            <Tabs centered size={"large"} defaultActiveKey="1">
                <TabPane tab="Маршруты" key="1">
                    <Table
                        size={"small"}
                        scroll={{x: 600}}
                        dataSource={routes}
                        pagination={false}
                        columns={[
                            {
                                title: 'Маршрут',
                                dataIndex: 'label',
                                key: 'label',
                            },
                            {
                                title: 'Дистанция',
                                dataIndex: 'distance',
                                key: 'distance',
                            },
                            {
                                title: 'Продолжительность',
                                dataIndex: 'duration',
                                key: 'duration',
                            },
                            {
                                title: 'Остановки',
                                dataIndex: 'stops',
                                key: 'stops',
                                render: (stops) => (
                                    <ul>
                                        {stops.map((stop: any) => (
                                            <li key={stop}>{stop}</li>
                                        ))}
                                    </ul>
                                ),
                            },
                        ]}
                    />
                </TabPane>
                <TabPane tab="Расписание" key="2">
                    <Table
                        size={"small"}
                        scroll={{x: 2000}}
                        dataSource={schedule}
                        pagination={false}
                        columns={[
                            {
                                title: 'Номер поезда',
                                dataIndex: 'trainNumber',
                                key: 'trainNumber',
                            },
                            {
                                title: 'Отправление',
                                dataIndex: 'departure',
                                key: 'departure',
                            },
                            {
                                title: 'Прибытие',
                                dataIndex: 'destination',
                                key: 'destination',
                            },
                            {
                                title: 'Время отправления',
                                dataIndex: 'departureTime',
                                key: 'departureTime',
                            },
                            {
                                title: 'Время прибытия',
                                dataIndex: 'arrivalTime',
                                key: 'arrivalTime',
                            },
                            {
                                title: 'Промежуточные станции',
                                dataIndex: 'intermediateStations',
                                key: 'intermediateStations',
                                render: (stations) => (
                                    <ul>
                                        {stations.map((station: any) => (
                                            <li key={station}>{station}</li>
                                        ))}
                                    </ul>
                                ),
                            },
                            {
                                title: 'Время в пути',
                                dataIndex: 'travelTime',
                                key: 'travelTime',
                            },
                            {
                                title: 'Частота',
                                dataIndex: 'frequency',
                                key: 'frequency',
                            },
                            {
                                title: 'Тип поезда',
                                dataIndex: 'trainType',
                                key: 'trainType',
                            },
                            {
                                title: 'Цены',
                                dataIndex: 'prices',
                                key: 'prices',
                                render: (prices) => (
                                    <>
                                        <div>Эконом: {prices.economy}</div>
                                        <div>Бизнес: {prices.business}</div>
                                    </>
                                ),
                            },
                        ]}
                    />
                </TabPane>
                <TabPane tab="Доступные поезда" key="3">
                    <Table
                        dataSource={trainData}
                        scroll={{x: 600}}
                        pagination={false}
                        columns={trainColumns}
                        expandable={{
                            expandedRowRender: (record) => (
                                <Table
                                    dataSource={record.cars}
                                    pagination={false}
                                    columns={carColumns}
                                />
                            ),
                            rowExpandable: (record) => record.cars.length > 0,
                        }}
                    />
                </TabPane>
                <TabPane tab="Прибывающие поезда" key="4">
                    <Table
                        dataSource={arrivedTrains}
                        pagination={false}
                        scroll={{x: 1000}}
                        columns={[
                            {
                                title: 'Номер поезда',
                                dataIndex: 'trainNumber',
                                key: 'trainNumber',
                            },
                            {
                                title: 'Станция прибытия',
                                dataIndex: 'arrivalStation',
                                key: 'arrivalStation',
                            },
                            {
                                title: 'Время прибытия',
                                dataIndex: 'arrivalTime',
                                key: 'arrivalTime',
                            },
                            {
                                title: 'Станция отправления',
                                dataIndex: 'originStation',
                                key: 'originStation',
                            },
                            {
                                title: 'Время отправления',
                                dataIndex: 'originTime',
                                key: 'originTime',
                            },
                            {
                                title: 'Задержка',
                                dataIndex: 'delay',
                                key: 'delay',
                                render: (delay) => (
                                    <Tag color={delay > 0 ? 'red' : 'green'}>
                                        {delay > 0 ? `${delay} мин` : 'Нет'}
                                    </Tag>
                                ),
                            },
                        ]}
                    />
                </TabPane>
            </Tabs>
        </div>
    );
};

export default StationPage;