import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import BlogInfo from './BlogInfo';
import Bloglist from './Bloglist';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Functional component representing a page displaying blogs
function BlogsPage() {
    const { id } = useParams(); // Get the id parameter from the URL
    // eslint-disable-next-line 
    const [blogs, setBlogs] = useState({}); // State to store blog data

    console.log(id); // Log the id parameter

    // Effect hook to fetch blog data when the id changes
    useEffect(() => {
        async function getData() {
            try {
                const res = await axios.get(`https://65a0b515600f49256fb02c99.mockapi.io/blogs/${id}`); // Fetch blog data by id
                console.log(res.data); // Log the fetched blog data
            } catch (error) {
                console.error('Error fetching blog data:', error); // Log error if fetching blog data fails
            }
        }

        getData(); // Invoke the getData function
    }, [id]); // Include id in the dependency array to trigger the effect when it changes

    return (
        <div>
           <h1>Blogs Page</h1>
            <SearchBar /> {/* Render the SearchBar component */}
            <BlogInfo /> {/* Render the BlogInfo component */}
            <Bloglist /> {/* Render the BlogList component */}
        </div>
    );
}

export default BlogsPage; // Export the BlogsPage component
