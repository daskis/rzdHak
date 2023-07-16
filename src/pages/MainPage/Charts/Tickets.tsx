import React from 'react';
import {Collapse, CollapseProps, Typography} from 'antd';
import {Pie} from '@ant-design/charts';
import {useGetTicketsQuery} from "../../../features/api/statisticApi";

const Tickets = () => {
    // @ts-ignore
    const {data, error, isLoading} = useGetTicketsQuery();
    const pieConfig: any = {
        appendPadding: 20,
        data,
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
                {/*@ts-ignore*/}
                {data && <Pie {...pieConfig} />}
            </div>
        </div>
    );
};

export default Tickets;
