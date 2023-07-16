import React, {useEffect, useState} from 'react';
import styles from "./TicketsPage.module.scss";
import SelectComponent from "../../components/SelectComponent/SelectComponent";
import {ArrowRightOutlined} from "@ant-design/icons";
import {Button, DatePicker, DatePickerProps, Table, Tag, Typography} from "antd";
import {useSelector} from "react-redux";
import {toast} from "react-toastify";
import {useGetTicketsInfoQuery} from "../../features/api/ticketsApi";

const TicketsPage = () => {
        // @ts-ignore
        const {data, error, isLoading} = useGetTicketsInfoQuery()
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
        ]
        const optionsTo = [
            {
                label: "Адлер",
                value: "adl"
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
                    <Button type={"primary"} onClick={() => {
                        toast.info("Отправлено на рассмотрение")
                    }} ghost>Выполнить рек. действия</Button>
                )
            },
        ];
        return (
            <div className={styles.wrapper}>
                <div className={styles.Selects}>
                    {/*@ts-ignore*/}
                    <SelectComponent defaultValue={{label: "Москва",value: "msk"}} options={optionsFrom} placeholder={"Откуда"} onMap={false}/>
                    <ArrowRightOutlined/>
                    <SelectComponent defaultValue={{label: "Адлер", value: "adl"}} options={optionsTo} placeholder={"Куда"}
                                     onMap={false}/>
                    <DatePicker disabled placeholder={"Выберите дату"} size={"large"} onChange={onChange}/>
                    <Button size={windowWidth > 700 ? "large" : "middle"} onClick={() => setIsReady(true)}
                            type={"primary"}>Показать маршруты</Button>
                </div>
                {/*@ts-ignore*/}
                {isReady && <Table dataSource={data} columns={columns}/>}
            </div>
        );
    }
;

export default TicketsPage;