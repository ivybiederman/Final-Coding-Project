import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css'; // Import custom CSS
import { useEffect, useState } from "react"; // Import necessary hooks

import Navbar from './components/Navbar'; // Import Navbar component
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route components from react-router-dom
import HomePage from './components/HomePage'; // Import HomePage component
import SettingsPage from './components/SettingsPage'; // Import SettingsPage component
import BlogsPage from './components/BlogPage'; // Import BlogsPage component
// eslint-disable-next-line 
import BlogCard from './components/BlogCard'; // Import BlogCard component
import BlogInfo from './components/BlogInfo'; // Import BlogInfo component
import Bloglist from './components/Bloglist'; // Import Bloglist component
import SearchBar from './components/SearchBar'; // Import SearchBar component
import { Button, Card } from 'react-bootstrap'; // Import Button and Card components from react-bootstrap

import Api from './components/api'; // Import Api class from api file
import apiInstance from './components/api'; // Import apiInstance from api file
import UpdateBlog from './components/UpdateBlog'; // Import UpdateBlog component

function App() {
  // Define state for blogs
  const [blogs, setBlogs] = useState([]);

  // Function to fetch blog data
  const gettingBlogData = async () => {
    console.log("Getting blog data...");
    let myBlogData = await Api.getAllBlogs();
    setBlogs(myBlogData)
  }

  // Function to handle form submission for creating a new blog
  const handleCreateButton = async (event) => {
    event.preventDefault(); // Prevent the default behavior of a form, i.e., refreshing the page
    console.log("creating things...", event)

    const blogNameInput = document.getElementById("new-blog-name").value;
    console.log("new input data???", blogNameInput);

    await apiInstance.postToBlog(blogNameInput);

    gettingBlogData();
  }

  // Function to handle updating a blog
  const handleUpdateButton = async (blogIdToUpdate, updatedData) => {
    console.log("Updating blog...", blogIdToUpdate, updatedData);
    const updatedBlog = await apiInstance.updateBlog(blogIdToUpdate, updatedData);
    if (updatedBlog) {
      console.log("Blog updated successfully:", updatedBlog);
      gettingBlogData();
    } else {
      console.error("Failed to update blog.");
    }
  }

  // Function to handle deleting a blog
  const handleDeleteButton = async (blogIdToDelete) => {
    console.log("Deleting blog...", blogIdToDelete);
    const deletionResult = await apiInstance.deleteBlog(blogIdToDelete);
    if (deletionResult) {
      console.log("Blog deleted successfully.");
      gettingBlogData();
    } else {
      console.error("Failed to delete blog.");
    }
  }

  // Effect hook to fetch blog data on component mount
  useEffect(() => {
    gettingBlogData();
  }, []);

  console.log("updated state?", blogs);
  
  return (
    <>
      {/* Card for creating a new blog */}
      <Card id="new-blog">
        <h2>New Blog</h2>
        <input type="text" id="new-blog-name" className="form-control"/><br/>
        <Button onClick={handleCreateButton} id="create-new-blog" className="btn btn-primary form-control">Create</Button>
      </Card>
      <SearchBar/> {/* Render the SearchBar component */}
      <div className="App-header">
        My Blog Page
        <Navbar /> {/* Render the Navbar component */}
        {/* Mapping over blogs to display */}
        {blogs.reverse().map((blog, index) => (
          <div key={index}>
            Test
            <h1>{blog.title}</h1>
            <h3>{blog.id}</h3>
            <img src={blog.picture} />
            {/* Render the UpdateBlog component */}
            <UpdateBlog blogId={blog.id} gettingBlogData={gettingBlogData}/>
            {/* Button to delete a blog */}
            <Button onClick={() => handleDeleteButton(blog.id)} id="delete-new-blog" className="btn btn-danger form-control">Delete</Button>
          </div>
        ))}
        {/* Define routes for the application */}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/settings' element={<SettingsPage />} />
          <Route path='/blog/:id' element={<BlogsPage />} />
          <Route path='/blogs' element={<BlogsPage />} />
          <Route path='/blog/:id' element={<BlogInfo />} />
          <Route path='/bloglist' element={<Bloglist />} />
          <Route path='/search' element={<SearchBar />} />
        </Routes>
      </div>
    </>
  );
}

// Class for Blog
class Blog {
  constructor(name) {
    this.name = name;
    this.authors = [];
  }

  // Function to add an author to the blog
  addAuthor(name, age) {
    this.authors.push(new Author(name, age));
  }
}

// Class for Author
class Author {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

export default App; // Export the App component
