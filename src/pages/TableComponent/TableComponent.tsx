import React from 'react';
import {Space, Table, Tag} from 'antd';
import type {ColumnsType} from 'antd/es/table';






const TableComponent: React.FC = ({columns, dataSource}: any) => <Table columns={columns} dataSource={dataSource}/>;

export default TableComponent;