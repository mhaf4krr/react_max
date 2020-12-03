import React from 'react'
import Navbar from "../../components/Navbar/Navbar"
import AllPosts from "../AllPosts/AllPosts"
import AllPosts_new from "../AllPosts_2/AllPosts"

export default function Home() {
    return (
        <React.Fragment>
             <Navbar/>
                <div>
                    <h3>Home Page</h3>
                </div>
                <AllPosts/>
                <div>ALL new Posts</div>
                <AllPosts_new/>
        </React.Fragment>
    )
}
