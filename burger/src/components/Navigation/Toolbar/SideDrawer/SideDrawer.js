import React from 'react'
import Logo from "../../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"
export default function SideDrawer(props) {
    return (
        <div>
            <Logo/>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
    )
}
