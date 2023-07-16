import React, {useState} from 'react';
import styles from "./TicketsPage.module.scss";
import SelectComponent from "../../components/SelectComponent/SelectComponent";
import {ArrowRightOutlined} from "@ant-design/icons";
import {Button, DatePicker, DatePickerProps, Table, Tag, Typography} from "antd";
import {useSelector} from "react-redux";
import {toast} from "react-toastify";

const TicketsPage = () => {
        const windowWidth = useSelector((state: any) => state.screen.width)
        const [isReady, setIsReady] = useState(false)
        const onChange: DatePickerProps['onChange'] = (date, dateString) => {
            console.log(date, dateString);
        };

        const optionsFrom = [
            {
                label: "Москва",
                value: "msk"
            },
            {
                label: "Санкт-Петербург",
                value: "spb"
            },
            {
                label: "Белгород",
                value: "bel"
            },
            {
                label: "Адлер",
                value: "adl"
            },
        ]
        const optionsTo = [
            {
                label: "Москва",
                value: "msk"
            },
            {
                label: "Санкт-Петербург",
                value: "spb"
            },
            {
                label: "Белгород",
                value: "bel"
            },
            {
                label: "Адлер",
                value: "adl"
            },
        ]

        const dataSource = [
            {
                route: 'Москва - Адлер',
                distance: '1669 км',
                currentPrice: 2500,
                recommendedPrice: 2600,
                availableTickets: 12,
                notes: 'Все в порядке',
            },
            {
                route: 'Москва - Белгород',
                distance: '700 км',
                currentPrice: 1800,
                recommendedPrice: 2200,
                availableTickets: 8,
                notes: 'Нужно повысить цену',
            },
            {
                route: 'Москва - Санкт-Петербург',
                distance: '650 км',
                currentPrice: 3000,
                recommendedPrice: 3600,
                availableTickets: 5,
                notes: 'Нужно повысить цену',
            },
            // Дополнительные строки данных
            {
                route: 'Москва - Новосибирск',
                distance: '3388 км',
                currentPrice: 4000,
                recommendedPrice: 3900,
                availableTickets: 15,
                notes: 'Все в порядке',
            },
            {
                route: 'Санкт-Петербург - Красноярск',
                distance: '4282 км',
                currentPrice: 5000,
                recommendedPrice: 5100,
                availableTickets: 20,
                notes: 'Все в порядке',
            },
            {
                route: 'Екатеринбург - Казань',
                distance: '614 км',
                currentPrice: 2200,
                recommendedPrice: 2100,
                availableTickets: 10,
                notes: 'Все в порядке',
            },
            {
                route: 'Сочи - Ростов-на-Дону',
                distance: '701 км',
                currentPrice: 1800,
                recommendedPrice: 2400,
                availableTickets: 5,
                notes: 'Нужно повысить цену',
            },
            {
                route: 'Нижний Новгород - Владивосток',
                distance: '9191 км',
                currentPrice: 6000,
                recommendedPrice: 5600,
                availableTickets: 18,
                notes: 'Нужно понизить цену',
            },
            {
                route: 'Москва - Волгоград',
                distance: '969 км',
                currentPrice: 2800,
                recommendedPrice: 3200,
                availableTickets: 8,
                notes: 'Нужно повысить цену',
            },
            {
                route: 'Красноярск - Иркутск',
                distance: '1094 км',
                currentPrice: 3200,
                recommendedPrice: 3100,
                availableTickets: 12,
                notes: 'Все в порядке',
            },
            {
                route: 'Самара - Саратов',
                distance: '386 км',
                currentPrice: 1500,
                recommendedPrice: 1900,
                availableTickets: 6,
                notes: 'Нужно повысить цену',
            },
        ];

        const columns = [
            {
                title: 'Маршрут',
                dataIndex: 'route',
                key: 'route',
            },
            {
                title: 'Дистанция',
                dataIndex: 'distance',
                key: 'distance',
            },
            {
                title: 'Нынешняя цена',
                dataIndex: 'currentPrice',
                key: 'currentPrice',
                align: "center",
                render: (currentPrice: any) => {
                    return (
                        <Typography.Text style={{fontSize: 18, fontWeight: 600}}>
                            {currentPrice}₽
                        </Typography.Text>
                    )
                }
            },
            {
                title: 'Рекомендуемая цена',
                dataIndex: 'recommendedPrice',
                key: 'recommendedPrice',
                align: "center",
                render: (recommendedPrice: any) => {
                    return (
                        <Typography.Text style={{fontSize: 18, fontWeight: 600}}>
                            {recommendedPrice}₽
                        </Typography.Text>
                    )
                },
            },
            {
                title: 'Количество билетов',
                dataIndex: 'availableTickets',
                key: 'availableTickets',
            },
            {
                title: 'Примечания',
                dataIndex: 'notes',
                key: 'notes',
                render: (notes: any) => {
                    let color;
                    switch (notes) {
                        case "Нужно повысить цену":
                            color = "green";
                            break;
                        case "Нужно понизить цену":
                            color = "red";
                            break;
                        case "Все в порядке":
                            color = "blue";
                            break;
                        default:
                            color = "gray";
                            break

                    }
                    return (
                        <Tag color={color}>
                            {notes}
                        </Tag>
                    )
                },
            },
            {
                title: 'Действие',
                dataIndex: 'action',
                key: 'action',
                render: (action: any) => (
                    <Button type={"primary"} onClick={() => {toast.info("Отправлено на рассмотрение")}} ghost>Выполнить рек. действия</Button>
                )
            },
        ];
    return (
            <div className={styles.wrapper}>
                <div className={styles.Selects}>
                    <SelectComponent options={optionsFrom} placeholder={"Откуда"} onMap={false}/>
                    <ArrowRightOutlined/>
                    <SelectComponent options={optionsTo} placeholder={"Куда"} onMap={false}/>
                    <DatePicker placeholder={"Выберите дату"} size={"large"} onChange={onChange}/>
                    <Button size={windowWidth > 700 ? "large" : "middle"} onClick={() => setIsReady(true)}
                            type={"primary"}>Показать маршруты</Button>
                </div>
                {/*@ts-ignore*/}
                <Table dataSource={dataSource} columns={columns}/>
            </div>
        );
    }
;

export default TicketsPage;