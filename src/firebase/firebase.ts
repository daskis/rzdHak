import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
const firebaseConfig = {
    apiKey: "AIzaSyDleFvBsAloB3MQLuogScEYuoleLRsP_Wk",
    authDomain: "rzhd-47dd0.firebaseapp.com",
    projectId: "rzhd-47dd0",
    storageBucket: "rzhd-47dd0.appspot.com",
    messagingSenderId: "675897032100",
    appId: "1:675897032100:web:3bea074eb39d1f4c8dd531"
};
initializeApp(firebaseConfig);
export const onMessageListener = () =>
    new Promise((resolve) => {
        const messaging = getMessaging();
        onMessage(messaging, (payload) => {
            resolve(payload);
        });
    });
export const Sendrequest = () => {
    console.log("Requesting User Permission......");
    Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
            console.log("Notification User Permission Granted.");
            const messaging = getMessaging();
            return getToken(messaging, { vapidKey: `BCr9CwbTJXF9sem98h5JzmNDD0dPwSgfMxdzu4fWZVlTj_OvSjFXLXVh5HDySmsbep3oZavhT84OEiJlY6jRkts` })
                .then((currentToken) => {
                    if (currentToken) {
                        console.log('Client Token: ', currentToken);

                    } else {

                        console.log('Failed to generate the registration token.');
                    }
                })
                .catch((err) => {
                    console.log('An error occurred when requesting to receive the token.', err);
                });
        } else {
            console.log("User Permission Denied.");
        }
    });
}
Sendrequest();