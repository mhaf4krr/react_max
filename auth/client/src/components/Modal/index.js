import React from 'react'
import styles from "./Modal.module.css"
export default function Modal(props) {

    
    let modal = ( <div className={styles["main_wrapper"]}> 
    <h2 style={{color:"white"}}>Loading</h2>
    </div>)
   
    return (
       <React.Fragment>
           {props.show?modal:null}
       </React.Fragment>
    )
}
