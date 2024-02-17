import React, { useState, useEffect } from "react";
import axios from 'axios'; // Import axios
import apiInstance from './api'; // Import apiInstance

import BlogCard from "./BlogCard";

function BlogList() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedBlogs = await apiInstance.getAllBlogs();
                setBlogs(fetchedBlogs);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="bloglist">
            Blogs
            {blogs.map(blog => (
                <BlogCard key={blog.id} blog={blog} />
            ))}
        </div>
    );
}

export default BlogList;
