import React from 'react'
import styles from "./Navigation.module.css"
import {Link} from "react-router-dom"
import {connect} from "react-redux"

function Navigation(props) {
    console.log(props.authenticated)
    return (
        <div>
            <ul className={styles["wrapper"]}>
                <Link to="/">Home</Link>
                <Link to="/auth">Auth</Link>
                
                {props.authenticated?<Link to="/secure">Secure</Link>:null}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) =>{
   
    return {
        ...state
    }
}


export default connect(mapStateToProps)(Navigation)


