import React, {useEffect, useState} from 'react';
import SelectComponent from "../../components/SelectComponent/SelectComponent";
import styles from "./ChangesPage.module.scss"
import {ArrowRightOutlined} from "@ant-design/icons";
import {Button, Tabs, TabsProps} from "antd";
import {ColumnsType} from "antd/es/table";
import TableComponent from "../TableComponent/TableComponent";
import {useSelector} from "react-redux";
import {MultiLine} from "../MultiLine/MultiLine";

interface DataType {
    name: string
    date: string
    totalAmount: number
    recomendAmount: number
}

const ChangesPage = () => {
    const [firstSelect, setFirstSelect] = useState("")
    const [secondSelect, setSecondSelect] = useState("")
    const [isReady, setIsReady] = useState(false)
    const windowWidth = useSelector((state: any) => state.screen.width)


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
    const columns: ColumnsType<DataType> = [
        {
            title: 'Поезд/Нитка',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Времяв отправления / прибытия',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Итого сумма',
            dataIndex: 'totalAmount',
            key: 'totalAmount',
        }, {
            title: 'Рекомменд. итог. стоимость',
            dataIndex: 'recomendAmount',
            key: 'recomendAmount',
        },
    ]
    const data: DataType[] = [
        {
            name: 'Поезд 1',
            date: '2023-07-15 / 2023-07-16',
            totalAmount: 1500,
            recomendAmount: 2000,
        },
        {
            name: 'Поезд 2',
            date: '2023-07-16 / 2023-07-17',
            totalAmount: 1200,
            recomendAmount: 1800,
        },
        {
            name: 'Поезд 3',
            date: '2023-07-17 / 2023-07-18',
            totalAmount: 1600,
            recomendAmount: 2100,
        },
        {
            name: 'Поезд 4',
            date: '2023-07-18 / 2023-07-19',
            totalAmount: 1400,
            recomendAmount: 1900,
        },
        {
            name: 'Поезд 5',
            date: '2023-07-19 / 2023-07-20',
            totalAmount: 1800,
            recomendAmount: 2300,
        },
    ];

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: `Статистика`,
            //@ts-ignore
            children: (
                <div className={styles.Wrapper}
                >
                    <MultiLine/>
                </div>
            ),
        },
        {
            key: '2',
            label: `Действия`,
            //@ts-ignore
            children: (
                <div className={styles.Changes}>
                    <div className={styles.Selects}>
                        <SelectComponent options={optionsFrom} placeholder={"Выберите маршрут"} onMap={false}/>
                        <ArrowRightOutlined/>
                        <SelectComponent options={optionsFrom} placeholder={"Выберите маршрут"} onMap={false}/>
                        <Button size={windowWidth > 700 ? "large" : "middle"} onClick={() => setIsReady(true)}
                                type={"primary"}>Показать маршруты</Button>
                    </div>

                    {isReady &&
                        // @ts-ignore
                        <TableComponent columns={columns} dataSource={data}/>
                    }
                </div>
            ),
        },
    ];
    const onChange = (key: string) => {
        console.log(key);
    };

    return (
        <Tabs defaultActiveKey="1" centered size={windowWidth > 500 ? "large" : "small"} items={items}
              tabPosition={"top"} onChange={onChange}/>
    );
};

export default ChangesPage;