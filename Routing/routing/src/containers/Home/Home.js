import React from 'react'
import Navbar from "../../components/Navbar/Navbar"
import AllPosts from "../AllPosts/AllPosts"

export default function Home() {
    return (
        <React.Fragment>
             <Navbar/>
                <div>
                    <h3>Home Page</h3>
                </div>
                <AllPosts/>
        </React.Fragment>
    )
}
