import React from 'react'



import styles from "./Button.module.css"
export default function button(props) {
    return (
        <div onClick={props.clicked} className={[styles.Button,styles[props.btnType]].join(" ")}>
            {props.children}
        </div>
    )
}
