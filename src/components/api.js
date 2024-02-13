import React, { PureComponent } from 'react'

const api_endpoint = "https://65a0b515600f49256fb02c99.mockapi.io/blogs"

class Api extends PureComponent {
    // constructor(props) {
    //     super(props)

    //     this.state = {
            
    //     }
    // }

    //functions go here


      getAllBlogs = async () => {
        const response = await fetch(api_endpoint);
        const blogs = await response.json();
        console.log("mock api data:",blogs);

        return blogs
      }

      postToBlog = async (blogData) => {
        console.log("Posting to the blog...", blogData);
        const response = await fetch(api_endpoint, blogData);
        const blogs = await response.json();
        console.log("mock api data:",blogs);

        return blogs
      }

    // render() {
    //     return (
            
    //     )
    // }
}

export default new Api();
