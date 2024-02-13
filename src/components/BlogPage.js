import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import BlogInfo from './BlogInfo';
import Bloglist from './Bloglist';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BlogsPage() {
    const { id } = useParams();
    // eslint-disable-next-line 
    const [blogs, setBlogs] = useState({});

    console.log(id);

    useEffect(() => {
        async function getData() {
            try {
                const res = await axios.get(`https://65a0b515600f49256fb02c99.mockapi.io/blogs/${id}`);
                console.log(res.data);
            } catch (error) {
                console.error('Error fetching blog data:', error);
            }
        }

        getData();
    }, [id]); // Include id in the dependency array

    return (
        <div>
           <h1>Blogs Page</h1>
            <SearchBar />
            <BlogInfo />
            <Bloglist />

        </div>
    );
}

export default BlogsPage;
