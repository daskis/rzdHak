import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "antd";
import {useDispatch, useSelector} from "react-redux";
import styles from "./Sidebar.module.scss"
import cn from "classnames"
import {openHandler} from "../../features/slices/menuSlice";

const links = [
    {
        label: "Главная",
        link: "/",
    },
    {
        label: "Карта маршрутов",
        link: "/map",
    },
    {
        label: "Изменения маршрутов",
        link: "/changes",
    },
]
const Sidebar = () => {
    const isOpen = useSelector((state: any) => state.menu.isOpen)
    const dispatch = useDispatch();
    return (
        <div className={cn(styles.Sidebar, {
            [styles.Open]: isOpen
        })}>
            <ul className={styles.links}>
                {links.map((item, i) => (
                    <li onClick={() => {dispatch(openHandler(!isOpen))}} className={styles.link} key={item.label}>
                        <Link to={item.link}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className={styles.buttons}>
                <Link
                    onClick={() => {dispatch(openHandler(!isOpen))}}
                    to={"/auth/login"}>
                    <Button size={"large"} type={"primary"}>
                        Вход
                    </Button>
                </Link>
                <Link
                    onClick={() => {dispatch(openHandler(!isOpen))}}
                    to={"/auth/register"}>
                    <Button size={"large"} type={"primary"}>
                        Регистрация
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;