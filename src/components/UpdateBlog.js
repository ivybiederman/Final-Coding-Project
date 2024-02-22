import React, { useState } from 'react';
import apiInstance from './api';

// Functional component for updating a blog
function UpdateBlog({ blogId, gettingBlogData }) {
  const [title, setTitle] = useState(''); // State to store the updated title

  // Function to handle form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await apiInstance.updateBlog(blogId, title); // Update the blog using the API
      console.log('Blog updated successfully!');
      gettingBlogData(); // Refresh blog data after update
    } catch (error) {
      console.error('Error updating blog:', error); // Log error if updating blog fails
    }
  };

  return (
    <div>
      <h2>Update Blog</h2>
      {/* Form for updating the blog */}
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

export default UpdateBlog; // Export the UpdateBlog component
