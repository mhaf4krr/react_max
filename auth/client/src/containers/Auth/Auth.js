import React, { Component } from 'react'
import styles from "./Auth.module.css"
import Modal from "../../components/Modal/index"
import Navigation from "../../components/Navigation/Navigation"

import {connect} from "react-redux"

import axios from "../../axios/axios"

 class Auth extends Component {

    state ={
        currentForm:"SIGN_IN",
        form:{
            email:null,
            password:null
        },
 
        modal:{
            show:false,
            message:""
        }
       
    }

    
  


    handleSign = () =>{

        console.log("clicked Signin")

        let {email,password} = {...this.state.form}

        if(email=== "" || password==="" ){
            console.log("error")
            return
        }

       

            console.log("SIGNING IN")
            this.setState({modal:{
                
                show:true,
                message:"Signing You In... Please Wait"
            }})
            axios.post("/signin",{
                email,password
            },{
                headers:{
                    "Content-Type":"application/json"
                }
            }).then((response)=>{
                if(response.data === "SUCCESS"){
                    
                    this.setState({
                        modal:{
                            show:false,
                            message:""
                        }
                    })

                    let token= response.headers["x-auth-token"]
                    this.props.saveAuth(token)
                }

            }).catch(error =>{
                console.log(error)
            })
       

      
    }    

    handleInput = (id,value) =>{
     let prev_form = this.state.form
     let new_form = {
         ...prev_form,
     }

     new_form[id] = value

     this.setState({form:new_form})

     console.log(this.state.form)
    }

    render() {
       
        return (
            <React.Fragment>
            <Navigation/>
            <Modal show={this.state.modal.show} message={this.state.modal.message}/>
            <div className={styles["main_wrapper"]}>

                <form action="#">
                    <h3> Sign In </h3>
                <div>
                    <label>
                        Email
                    </label>
                    <input onChange={(e)=>{
                        this.handleInput("email",e.target.value)
                    }} type="email" />
                </div>

                <div>
                    <label>
                        Password
                    </label>
                    <input type="password"  onChange={(e)=>{
                        this.handleInput("password",e.target.value)
                    }}/>
                </div>

                <div>
                    <input type="submit" onClick={(e)=>{
                        console.log("Clicked")
                        e.preventDefault()
                        this.handleSign()
                    }} value="Sign In" />
                </div>
                </form>


                <form>
                    <h3> Sign Up </h3>
                <div>
                    <label>
                        Email
                    </label>
                    <input type="email" value=""/>
                </div>

                <div>
                    <label>
                        Password
                    </label>
                    <input type="text" value=""/>
                </div>

                <div>
                    <input type="submit" value="Sign Up" />
                </div>
                </form>
                
            </div>
            </React.Fragment>
        )
    }
}


const mapDispatchToProps = (dispatch) =>{
    return{
        saveAuth:(token)=>{
            dispatch({
                type:"STORE_AUTH_TOKEN",
                payload:token
            })
        }
    }
}

export default connect(null,mapDispatchToProps)(Auth)