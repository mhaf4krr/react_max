import React, { Component } from 'react'
import {Route} from "react-router-dom"
import Home from "../Home/Home"

import Post from "../Post/Post"
import PostInfo from "../PostInfo/Post"

export default class App extends Component {
    render() {
        return (
         <React.Fragment>
             <Route path="/" exact component={Home}/>
             <Route path="/post" exact component={Post}/>
             <Route path="/post-info/:id" exact component={PostInfo}/>
         </React.Fragment>
        )
    }
}
