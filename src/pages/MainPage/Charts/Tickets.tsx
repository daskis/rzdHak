import React from 'react';
import {Collapse, CollapseProps, Typography} from 'antd';
import {Pie} from '@ant-design/charts';

const Tickets = () => {
    const pieData = [
        {
            type: 'Купе',
            value: 12445,
        },
        {
            type: 'Плацкарт',
            value: 25623,
        },
        {
            type: 'Люкс',
            value: 1224,
        },
        {
            type: 'Сидельные',
            value: 36422,
        },
        {
            type: 'Вагоны СВ',
            value: 7453,
        },
        {
            type: 'МВПС',
            value: 74322,
        },
        {
            type: 'Общие',
            value: 12418,
        },
    ];

    const pieConfig: any = {
        appendPadding: 20,
        data: pieData,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        // legend: false,
        label: {
            type: 'inner',
            offset: '-30%',
            content: ({percent}: { percent: number }) => `${(percent * 100).toFixed(0)}%`,
            style: {
                fontSize: 14,
                textAlign: 'center',
            },
        },
        interactions: [{type: 'element-active'}],
    };

    return (
        <div>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "start"}}>

                <Pie {...pieConfig} />
            </div>
        </div>
    );
};

export default Tickets;
