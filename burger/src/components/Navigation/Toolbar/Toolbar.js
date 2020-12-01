import React from 'react'

import styles from "./Toolbar.module.css"

import Logo from "../../Logo/Logo"

import NavigationItems from "../Toolbar/NavigationItems/NavigationItems"

export default function Toolbar() {
    return (
        <header className={
            styles.Toolbar
        }>
            <div>Menu</div>
            <Logo/>
            <nav>
           <NavigationItems/>
            </nav>
        </header>
    )
}
