import React, {useState, useEffect} from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Sendrequest, onMessageListener } from './firebase';
const Notification = () => {
    const [notification, setNotification] = useState({title: '', body: ''});
    const notify = () =>  toast.error(<ToastDisplay/>);

    function ToastDisplay() {
        return (
            <div style={{position: "relative", right: 0, bottom: 0}}>
                <p><b>{notification?.title}</b></p>
                <p>{notification?.body}</p>
            </div>
        );
    };
    useEffect(() => {
        if (notification?.title) {
            notify()
        }
    }, [notification])
    Sendrequest();

    onMessageListener()
        .then((payload) => {
            // @ts-ignore
            setNotification({title: payload?.notification?.title, body: payload?.notification?.body});
        })
        .catch((err) => console.log('failed: ', err));
    return (
        <Toaster position={"bottom-right"}/>
    )
}

export default Notification