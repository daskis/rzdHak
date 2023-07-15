import {Select} from 'antd';
import React from 'react';
import styles from "./SelectComponent.module.scss"
import cn from "classnames";

const onChange = (value: string) => {
    console.log(`selected ${value}`);
};

export interface ISelectItem {
    label: string
    value: string
}
export interface ISelect {
    options: ISelectItem[]
    placeholder: string
    onMap: boolean
}
const onSearch = (value: string) => {
    console.log('search:', value);
};

const SelectComponent = ({options, placeholder, onMap} : ISelect) => (
    <Select
        size={"large"}
        className={cn(styles.Select,{
            [styles.absolute] : onMap,
            [styles.static] : !onMap
        })}
        showSearch
        placeholder={placeholder}
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        options={options}
    />
);
export default SelectComponent;