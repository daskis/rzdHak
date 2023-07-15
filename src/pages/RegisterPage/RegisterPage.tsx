import React, {useEffect, useState} from 'react';
import {Checkbox, Form, Input, Button} from "antd";
import {useRegisterUserMutation} from "../../features/api/authApi";
import {useNavigate} from "react-router-dom"
import {toast} from "react-toastify";
import {Cookies, useCookies} from "react-cookie";
import styles from "./RegisterPage.module.scss"

const RegisterPage = () => {
    type LayoutType = Parameters<typeof Form>[0]['layout'];


    const [cookies, setCookie] = useCookies(['access', 'refresh_token'])
    const [registerUser, {isLoading, data, isSuccess, error, isError}] =
        useRegisterUserMutation();
    const navigate = useNavigate();
    const onFinish = (values: any) => {
        console.log('Success:', values);
        toast.success("Успешно")
        // registerUser(values)
    };


    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    useEffect(() => {
        if (data) {
            setCookie("access", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg5MzUxNzk3LCJpYXQiOjE2ODkzNTE0OTcsImp0aSI6Ijc2MzFlZmM5NDRlMDRiYTk4MTU4NTVmNGNhYzE0YTk0IiwidXNlcl9pZCI6MX0.mhEopRo6eKR9ATzWwa-J6_-ZRyv3ZFKjz3I9pLPpKkY")
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
                name="username"
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
                    Регистрация
                </Button>
            </Form.Item>
        </Form>
    );
};
export default RegisterPage
