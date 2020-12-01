import React from 'react'
import {Link} from "react-router-dom"
import styles from "./Nav.module.css"


export default function Navigation() {
    return (
        <nav className={styles.navigation}>
            <ul>
                <li>
                    Home
                </li>
                <li>
                    All Posts
                </li>
                <li>
                    Add Post
                </li>
            </ul>
        </nav>
    )
}
