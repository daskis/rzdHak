import React, {ReactNode} from 'react';
import styles from "./Container.module.scss"
export interface ContainerProps {
    children: ReactNode
}
const Container = ({children} : ContainerProps) => {
    return (
        <div className={styles.Container}>
            {children}
        </div>
    );
};

export default Container;