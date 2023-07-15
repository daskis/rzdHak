import {Select} from 'antd';
import React, {useEffect, useState} from 'react';
import styles from "./SelectComponent.module.scss"
import cn from "classnames";
import {useSelector} from "react-redux";

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

const SelectComponent = ({options, placeholder, onMap} : ISelect) => {
    const windowWidth = useSelector((state: any) => state.screen.width)
    return (
        <Select
            size={windowWidth > 700 ? "large" : "middle"}
            className={cn(styles.Select, {
                [styles.absolute]: onMap,
                [styles.static]: !onMap
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
}
export default SelectComponent;