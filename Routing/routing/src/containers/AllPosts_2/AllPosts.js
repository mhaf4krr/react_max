import React, { Component } from 'react'
import styles from "./AllPosts.module.css"

import Post from "./Post_2/Post"

import axios from "axios"
export default class AllPosts extends Component {

    state={
        posts:null
    }


    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
            
        let data = response.data.slice(0,15)
            console.log(data[0])    
        this.setState({posts:data})
            
        })
    }

    render() {

        let posts_data = null
        if(!this.state.posts){
            posts_data = <h4>Loading Data, Please Wait ... </h4>
        }
        else {
            posts_data = this.state.posts.map((post)=>{
                return <Post title={post.title} body={post.body} id={post.id} />
            })
        }

        return (
            <React.Fragment>
                <div className={styles["header"]}>
                  <h2>
                    All Posts
                  </h2>
                </div>

                <div className={styles["main_content"]}>
                {posts_data}
                </div>
            </React.Fragment>
        )
    }
}
