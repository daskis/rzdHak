import React, {useEffect, useState} from 'react';
import {Space, Table, Tag} from 'antd';
import type {ColumnsType} from 'antd/es/table';
import {useSelector} from "react-redux";


const TableComponent: React.FC = ({columns, dataSource}: any) => {
    const windowWidth = useSelector((state:any) => state.screen.width)
    return (
        <Table scroll={columns.length > 4 ? {x: columns.length * 140} : {x: columns.length * 200}}
               size={windowWidth > 600 ? "middle" : "small"}
               columns={columns} dataSource={dataSource}/>
    )
}

export default TableComponent;