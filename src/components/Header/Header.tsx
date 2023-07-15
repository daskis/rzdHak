import React from 'react';
import {Link} from "react-router-dom";
import {BellOutlined, MenuOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {openHandler} from "../../features/slices/menuSlice";
import Container from "../Container/Container";
import MapPage from "../../pages/MapPage/MapPage";
import ChangesPage from "../../pages/ChangesPage/ChangesPage";
import styles from "./Header.module.scss"
import {Badge} from "antd";
const Header = () => {


    const dispatch = useDispatch()
    const isOpen = useSelector((state: any) => state.menu.isOpen)
    return (
        <header className={styles.Header}>
            <Container>
                <div className={styles.wrapper}>
                    <img className={styles.logo} src={"logo.png"} alt={"Logo"}/>
                    <div className={styles.buttons}>
                        <Badge size={"small"} style={{backgroundColor: "white", color: "red"} } count={2}>
                            <Link to={"/notifications"}>
                                <BellOutlined
                                    style={{fontSize: 24, fill: "#fff"}}
                                />
                            </Link>
                        </Badge>
                        <MenuOutlined  onClick={() => {
                            dispatch(openHandler(!isOpen))
                        }} style={{fontSize: 24, fill: "#fff"}}/>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;