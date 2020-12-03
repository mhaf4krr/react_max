import React from 'react'
import styles from "./Post.module.css"
import {Link} from "react-router-dom"

export default function Post(props) {
    return (
        <Link to={"post-info/"+props.id}>
            <div className={styles["main_wrapper"]}>
                <h3>
                {props.title}
                </h3>
              <p>
                {props.body}
                </p>
            </div>
        </Link>
    )
}
