import React from 'react'

import styles from "./Modal.module.css"
import Backdrop from "../../UI/Backdrop/Backdrop"

export default function Modal(props) {
    return (
        <React.Fragment>
            <Backdrop
            clicked= {props.modalClosed}
            show={props.show}/>
        <div className={styles.Modal}
        style={{
            transform:props.show?"translateY(0)":"translateY(-100vh)",
            opacity:props.show?"1":"0"
        }}>
            {props.children}
        </div>
        </React.Fragment>
    )
}
