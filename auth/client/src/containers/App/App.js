import React, { Component } from 'react'
import {BrowserRouter,Route,Switch,Redirect} from "react-router-dom"
import Home from "../Home/Home"

import {connect} from "react-redux"

import Auth from "../Auth/Auth"

 class App extends Component {

    componentDidMount(){
        let token = window.localStorage.getItem("x-auth-token")
        if(token){
            this.props.saveAuth(token)
        }
    }
    render() {
        return (
            <BrowserRouter>
               <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/auth" exact component={Auth}/>
                {this.props.authenticated?<Route path="/secure" exact render={()=>{
                   return <h4>Accessing Secure Content</h4>
                }}/>:<Redirect to="/"/>}
               </Switch>
            </BrowserRouter>
            
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        saveAuth: (token) =>{
            dispatch({
                type:"STORE_AUTH_TOKEN",
                payload:token
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)
