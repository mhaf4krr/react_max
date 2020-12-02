
import React, { Component } from 'react'
import Navbar from "../../components/Navbar/Navbar"
import axios from "axios"
import styles from "./Post.module.css"
export default class Post extends Component {

    state = { post:null}

    componentDidMount(){
        let param = new URLSearchParams(window.location.search)
        let id = (param.get("id"))
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((response)=>{
            console.log(response.data)
            this.setState({post:response.data})
        })
    }

    render(){
        let post;

        !this.state.post?post="Loading Post, Please Wait ...":post=(
            <div >
                    <h3>
                        {this.state.post.title}
                    </h3>
    
                    <p>
                        {this.state.post.body}
                    </p>
                </div>
        )
        return (

            <div >
                <Navbar/>
                <div className={styles["content_wrapper"]}>
                    <h3>
                        Post Information Page
                    </h3>
                    {post}
                </div>
               
            </div>
        )
    }
}
