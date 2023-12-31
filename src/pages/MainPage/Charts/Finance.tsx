import React, {useEffect, useState} from 'react';
import {Line} from '@ant-design/charts';
import {Typography} from "antd";
import {useGetFinanceQuery} from "../../../features/api/statisticApi";

const Finance = () => {
    // @ts-ignore
    const {data, error, isLoading} = useGetFinanceQuery();

    const finances = {
        "labels": [
            "01.01.2023",
            "02.01.2023",
            "03.01.2023",
            "04.01.2023",
            "05.01.2023",
            "06.01.2023",
            "07.01.2023",
            "08.01.2023",
            "09.01.2023",
            "10.01.2023",
            "11.01.2023",
            "12.01.2023",
            "13.01.2023",
            "14.01.2023",
            "15.01.2023",
            "16.01.2023",
            "17.01.2023",
            "18.01.2023",
            "19.01.2023",
            "20.01.2023",
            "21.01.2023",
            "22.01.2023",
            "23.01.2023",
            "24.01.2023",
            "25.01.2023",
            "26.01.2023",
            "27.01.2023",
            "28.01.2023",
            "29.01.2023",
            "30.01.2023"
        ],
        "revenue": [
            1580000,
            1820000,
            1690000,
            1920000,
            1750000,
            1980000,
            1830000,
            2000000,
            1670000,
            1930000,
            1810000,
            2050000,
            1900000,
            2080000,
            1790000,
            1970000,
            1720000,
            1890000,
            1780000,
            2000000,
            1850000,
            2070000,
            1950000,
            2150000,
            1870000,
            2130000,
            2040000,
            2280000,
            2210000,
            2400000
        ],
        "expenses": [
            900000,
            950000,
            1100000,
            1050000,
            920000,
            1000000,
            980000,
            1020000,
            930000,
            1000000,
            1050000,
            980000,
            900000,
            950000,
            1100000,
            1050000,
            920000,
            1000000,
            980000,
            1020000,
            930000,
            1000000,
            1050000,
            980000,
            900000,
            950000,
            1100000,
            1050000,
            920000,
            1000000
        ],
        "profit": [
            680000,
            870000,
            590000,
            870000,
            830000,
            980000,
            870000,
            980000,
            740000,
            930000,
            760000,
            1070000,
            1000000,
            1130000,
            690000,
            920000,
            800000,
            890000,
            800000,
            980000,
            900000,
            1070000,
            870000,
            1170000,
            970000,
            1180000,
            940000,
            1230000,
            1290000,
            1400000
        ],
        "bookings": [
            230,
            280,
            210,
            290,
            240,
            270,
            250,
            300,
            220,
            310,
            260,
            290,
            230,
            320,
            210,
            300,
            240,
            270,
            250,
            290,
            220,
            330,
            260,
            310,
            240,
            330,
            310,
            350,
            370,
            400
        ],
        "cancellations": [
            30,
            20,
            40,
            30,
            20,
            30,
            20,
            30,
            40,
            30,
            20,
            30,
            40,
            20,
            30,
            40,
            20,
            30,
            20,
            40,
            30,
            20,
            30,
            40,
            20,
            40,
            30,
            20,
            30,
            40
        ]
    }
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        if (finances) {
            const object: any = [];
            for (let i = 0; i < 30; i++) {
                // @ts-ignore
                const day = finances.labels[i];

                // Добавляем данные для выручки
                object.push({
                    day,
                    // @ts-ignore
                    value: finances.revenue[i],
                    label: 'Выручка',
                });

                // Добавляем данные для расходов
                object.push({
                    day,
                    // @ts-ignore
                    value: finances.expenses[i],
                    label: 'Расходы',
                });

                // Добавляем данные для прибыли
                object.push({
                    day,
                    // @ts-ignore
                    value: finances.profit[i],
                    label: 'Прибыль',
                });

                // Добавляем данные для бронирований
                object.push({
                    day,
                    // @ts-ignore
                    value: finances.bookings[i],
                    label: 'Бронирования',
                });

                // Добавляем данные для отмен
                object.push({
                    day,
                    // @ts-ignore
                    value: finances.cancellations[i],
                    label: 'Отмены',
                });
            }
            setChartData(object);
        }

    }, []);

    const config = {
        data: chartData,
        xField: 'day',
        yField: 'value',
        seriesField: 'label',
        xAxis: {title: {text: 'День'}},
        yAxis: {title: {text: 'Сумма'}},
    };

    return (
        <div style={{padding: 20, display: "flex", flexDirection: "column", gap: 20}}>
            <Line {...config} />
        </div>
    )

};

export default Finance;
