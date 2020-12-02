import React, { Component } from 'react'
import {Route} from "react-router-dom"
import Home from "../Home/Home"

import Post from "../Post/Post"

export default class App extends Component {
    render() {
        return (
         <React.Fragment>
             <Route path="/" exact component={Home}/>
             <Route path="/post" exact component={Post}/>
         </React.Fragment>
        )
    }
}
