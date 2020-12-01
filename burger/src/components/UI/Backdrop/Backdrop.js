import React from 'react'

import styles from "./Backdrop.css"

export default function Backdrop(props) {
    return props.show ? <div className={styles.Backdrop} onClick={
        props.clicked
    }></div> : null
}
