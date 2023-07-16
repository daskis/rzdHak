import React from 'react';
import {Column} from "@ant-design/charts";
import {useGetFlightsQuery} from "../../../features/api/statisticApi";

const Flights = () => {
    // @ts-ignore
    const {data, error, isLoading} = useGetFlightsQuery()

    const flightsData = [
        { type: "01.01.2023", value: 548 },
        { type: "02.01.2023", value: 327 },
        { type: "03.01.2023", value: 689 },
        { type: "04.01.2023", value: 432 },
        { type: "05.01.2023", value: 779 },
        { type: "06.01.2023", value: 215 },
        { type: "07.01.2023", value: 963 },
        { type: "08.01.2023", value: 521 },
        { type: "09.01.2023", value: 476 },
        { type: "10.01.2023", value: 834 },
        { type: "11.01.2023", value: 162 },
        { type: "12.01.2023", value: 758 },
        { type: "13.01.2023", value: 216 },
        { type: "14.01.2023", value: 703 },
        { type: "15.01.2023", value: 521 },
        { type: "16.01.2023", value: 394 },
        { type: "17.01.2023", value: 877 },
        { type: "18.01.2023", value: 289 },
        { type: "19.01.2023", value: 654 },
        { type: "20.01.2023", value: 423 },
        { type: "21.01.2023", value: 982 },
        { type: "22.01.2023", value: 397 },
        { type: "23.01.2023", value: 745 },
        { type: "24.01.2023", value: 582 },
        { type: "25.01.2023", value: 436 },
        { type: "26.01.2023", value: 769 },
        { type: "27.01.2023", value: 185 },
        { type: "28.01.2023", value: 613 },
        { type: "29.01.2023", value: 328 },
        { type: "30.01.2023", value: 894 },
    ];
    const config = {
        data: flightsData,
        xField: 'type',
        yField: 'value',
        label: {
            // 可手动配置 label 数据标签位置
            position: 'middle',
            // 'top', 'bottom', 'middle',
            // 配置样式
            style: {
                fill: '#FFFFFF',
                opacity: 0.6,
            },
        },
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        meta: {
            type: {
                alias: '类别',
            },
            sales: {
                alias: '销售额',
            },
        },
    };

    return (
        // @ts-ignore
        <Column {...config} />
    );
};

export default Flights;