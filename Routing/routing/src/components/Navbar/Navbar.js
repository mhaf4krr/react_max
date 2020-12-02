import React from 'react'

import {Link} from "react-router-dom"

import styles from "./Navbar.module.css"

export default function Navbar() {
    return (
        <nav className={styles["nav_wrapper"]}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link>All Posts</Link>
                </li>

                <li>
                    <Link>New Post</Link>
                </li>
            </ul>
        </nav>
    )
}
