import React from 'react';
import {Pie} from "@ant-design/charts";

const Delays = () => {
    const data = [
        {
            type: '< 5 минут',
            value: 924,
        },
        {
            type: '> 5 минут',
            value: 87,
        },
        {
            type: '> 10 минут',
            value: 57,
        },
        {
            type: '> 30 минут',
            value: 40,
        },
        {
            type: '> 1 часа',
            value: 56,
        },
    ];
    const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        label: {
            type: 'outer',
        },
        interactions: [
            {
                type: 'element-active',
            },
        ],
    };
    return <Pie {...config} />;
};

export default Delays;