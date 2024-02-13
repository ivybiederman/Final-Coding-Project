import React, { useEffect } from "react";
import axios from 'axios'; // Import axios

import BlogCard from "./BlogCard";

function Bloglist() {
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get('https://65a0b515600f49256fb02c99.mockapi.io/blogs');
                console.log(res.data); // Log the fetched data to the console
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getData();
    }, []); // Ensure useEffect runs only once after initial render by passing an empty dependency array

    return (
        <div className="bloglist">
            Blogs
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </div>
    );
}

export default Bloglist;
