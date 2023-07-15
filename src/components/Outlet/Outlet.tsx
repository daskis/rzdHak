import React from 'react';
import {ToastContainer} from "react-toastify";
import {useSelector} from "react-redux";
import Sidebar from "../Sidebar/Sidebar";
import 'react-toastify/dist/ReactToastify.css';

const Outlet = () => {
    const isOpen = useSelector((state: any) => state.menu.isOpen)
    return (
        <>
            <Sidebar/>
            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
};

export default Outlet;