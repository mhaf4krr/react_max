import React from "react";
import ReactDOM from "react-dom"
import App from "./containers/App/App"

import {createStore} from "redux"
import {Provider} from "react-redux"

import RootReducer from "./store/reducers/auth"
let store = createStore(RootReducer)

ReactDOM.render(
    
    <Provider store={store}>
        <App/>
    </Provider>
    ,document.querySelector("#root"))