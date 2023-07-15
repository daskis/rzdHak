import React, {useEffect, useState} from 'react';
import {Checkbox, Form, Input, Button} from "antd";
import {useLoginUserMutation, useRegisterUserMutation} from "../../features/api/authApi";
import {useNavigate} from "react-router-dom"
import {toast} from "react-toastify";
import {useCookies} from "react-cookie";
import styles from "./LoginPage.module.scss"

const RegisterPage = () => {
    const [cookies, setCookie] = useCookies(['access', 'refresh_token'])

    const [loginUser, {isLoading, data, isSuccess, error, isError}] =
        useLoginUserMutation();
    const navigate = useNavigate();
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const onFinish = (values: any) => {
        console.log('Success:', values);
        toast.success("Успешно")
        // loginUser(values)
    };


    useEffect(() => {
        if (data) {
            setCookie("access", data.access)
            toast.success("Успешно", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            setTimeout(() => {
                navigate("/");
            }, 2000)
        }
    }, [data])
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
            className={styles.Form}
            name="basic"
            layout={"vertical"}
            style={{maxWidth: 500}}
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Логин"
                name="login"
                rules={[{required: true, message: 'Пожалуйста введите логин!'}]}
            >
                <Input size={"large"}/>
            </Form.Item>

            <Form.Item
                label="Пароль"
                name="password"
                rules={[{required: true, message: 'Пожалуйста введите пароль!'}]}
            >
                <Input.Password size={"large"}/>
            </Form.Item>



            <Form.Item>
                <Button size={"large"} type="primary" htmlType="submit">
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};
export default RegisterPage
