import React, { useState } from 'react';
import apiInstance from './api';

function UpdateBlog({ blogId, gettingBlogData }) {
  const [title, setTitle] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await apiInstance.updateBlog(blogId, title);
      console.log('Blog updated successfully!');
      gettingBlogData()
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  return (
    <div>
      <h2>Update Blog</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button type="submit">Update Blog</button>
      </form>
    </div>
  );
}

export default UpdateBlog;
