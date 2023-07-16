import React from 'react';
import {Link} from "react-router-dom";
import {BellOutlined, MenuOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {openHandler} from "../../features/slices/menuSlice";
import Container from "../Container/Container";
import styles from "./Header.module.scss"
import {Badge} from "antd";
const Header = () => {
    const dispatch = useDispatch()
    const isOpen = useSelector((state: any) => state.menu.isOpen)
    return (
        <header className={styles.Header}>
            <Container>
                <div className={styles.wrapper}>
                    <div className={styles.buttons}>
                        <Badge size={"small"} style={{backgroundColor: "white", color: "#000", fontWeight: 500}} count={2}>
                            <Link to={"/notifications"}
                                  onClick={() => {
                                      dispatch(openHandler(false))
                                  }}>
                                <BellOutlined
                                    style={{fontSize: 24, fill: "#fff"}}
                                />
                            </Link>
                        </Badge>
                        <MenuOutlined onClick={() => {
                            dispatch(openHandler(!isOpen))
                        }} style={{fontSize: 24, fill: "#fff"}}/>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;