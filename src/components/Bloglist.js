import React, { useState, useEffect } from "react";
import axios from 'axios'; // Import axios
import apiInstance from './api'; // Import apiInstance

import BlogCard from "./BlogCard";

// Functional component representing a list of blogs
function BlogList() {
    const [blogs, setBlogs] = useState([]); // State to store the list of blogs

    // Effect hook to fetch data from the API when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedBlogs = await apiInstance.getAllBlogs(); // Fetch all blogs from the API
                setBlogs(fetchedBlogs); // Update the state with fetched blogs
            } catch (error) {
                console.error('Error fetching data:', error); // Log error if fetching data fails
            }
        };

        fetchData(); // Invoke the fetchData function
    }, []); // Dependency array to ensure the effect runs only once

    return (
        <div className="bloglist">
            Blogs
            {blogs.map(blog => (
                <BlogCard key={blog.id} blog={blog} /> // Render BlogCard component for each blog
            ))}
        </div>
    );
}

export default BlogList; // Export the BlogList component
