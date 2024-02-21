import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useEffect, useState} from "react"

import Navbar from './components/Navbar';
import { Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import SettingsPage from './components/SettingsPage';
import BlogsPage from './components/BlogPage';
// eslint-disable-next-line 
import BlogCard from './components/BlogCard';
import BlogInfo from './components/BlogInfo';
import Bloglist from './components/Bloglist';
import SearchBar from './components/SearchBar';
import { Button, Card } from 'react-bootstrap';

import Api from './components/api';
import apiInstance from './components/api';
import UpdateBlog from './components/UpdateBlog';

function App() {
// functions of the app can go here
const [blogs, setBlogs] = useState([]);

const gettingBlogData = async () => {
  console.log("Getting blog data...");
  let myBlogData = await Api.getAllBlogs();
  setBlogs(myBlogData)
}

const handleCreateButton = async (event) => {
  // console.clear();
  event.preventDefault(); //prevent the default behaviour of a form, ie refreshing the page.
  console.log("creating things...",event)

  const blogNameInput = document.getElementById("new-blog-name").value;
  console.log("new input data???", blogNameInput);

await apiInstance.postToBlog(blogNameInput)

gettingBlogData();
}
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
useEffect(() => {
  // Update the document title using the browser API
  gettingBlogData();
}, []);


console.log("updated state?", blogs);
  return (
    <>
    <Card id="new-blog">
    <h2>New Blog</h2>
    <input type="text" id="new-blog-name" className="form-control"/><br/>
    <Button onClick={handleCreateButton} id="create-new-blog" className="btn btn-primary form-control">Create</Button>
   </Card>
    <SearchBar/>
    <div className="App-header">
      My Blog Page
        <Navbar />
{/* Definies routes my application can take */}
{blogs.reverse().map((blog, index)=>(
<div key={index}>
Test

<h1>{blog.title}</h1>
<h3>{blog.id}</h3>
<img src={blog.picture} />
<UpdateBlog blogId={blog.id} gettingBlogData={gettingBlogData}/>
<Button onClick={()=>handleDeleteButton(blog.id)} id="delete-new-blog" className="btn btn-danger form-control">Delete</Button>
  </div>
))}

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

class Blog {
  constructor(name) {
    this.name = name;
    this.authors = [];
  }

  addAuthor(name, age) {
    this.authors.push(new Author(name, age));
  }
}

class Author {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// class BlogService {
//   static url = 'https://65a0b515600f49256fb02c99.mockapi.io/blogs';

//   //Converted
//   static getAllBlogs() {
//     return $.get(this.url);
//   }

//   static getBlog(id) {
//     return $.get(`${this.url}/${id}`);
//   }

//   static createBlog(blog) {
//     return $.post(this.url, blog);
//   }

//   static updateBlog(blog) {
//     return $.ajax({
//       url: `${this.url}/${blog._id}`,
//       dataType: 'json',
//       data: JSON.stringify(blog),
//       contentType: 'application/json',
//       type: 'PUT'
//     });
//   }

//   static deleteBlog(id) {
//     return $.ajax({
//       url: `${this.url}/${id}`,
//       type: 'DELETE'
//     });
//   }
// }

// class DOMManager {
//   static blogs;

//   static getAllBlogs() {
//     BlogService.getAllBlogs().then(blogs => this.render(blogs)); 
//   }

//   static createBlog(name) {
//     BlogService.createBlog(new Blog(name))
//     .then(() => {
//       return BlogService.getAllBlogs();
//     })
//     .then((blogs) => this.render(blogs));
//   }
  
//   static deleteBlog(id) {
//     BlogService.deleteBlog(id)
//       .then(() => {
//         return BlogService.getAllBlogs();
//       })
//       .then((blogs) => this.render(blogs));
//   }

//   static render(blogs) {
//     this.blogs = blogs;
//     $('#app').empty();
//     for (let blog of blogs) {
//       $('#app').prepend(`
//         <div id="${blog._id}" class="card"> 
//           <div class="card-header">
//             <h2>${blog.name}</h2> 
//             <button class="btn btn-danger" onclick="DOMManager.deleteBlog('${blog._id}')">Delete</button>
//           </div>
//           <div class="card-body">
//             <div class="card">
//               <div class="col-sm">
//                 <input type="text" id="${blog._id}-author-name" class="form-control" placeholder="Author Name">
//               </div>
//               <div class="col-sm">
//                 <input type="text" id="${blog._id}-author-age" class="form-control" placeholder="Author Age">
//               </div>
//               <button id="${blog._id}-new-author" onclick="DOMManager.addAuthor('${blog._id}')" class="btn btn-primary form-control">Add Author</button>
//             </div>
//           </div>
//         </div><br>
//       `);
//       for (let author of blog.authors) {
//         $(`#${blog._id}`).find('.card-body').append(`
//           <div>
//             <span><strong>Name:</strong> ${author.name}</span><br>
//             <span><strong>Age:</strong> ${author.age}</span><br>
//             <button class="btn btn-danger" onclick="DOMManager.deleteAuthor('${blog._id}', '${author.name}')">Delete Author</button>
//           </div>
//         `);
//       }
//     }
//   }

//   static addAuthor(blogId) {
//     for (let blog of this.blogs) {
//       if(blog._id == blogId) {
//         blog.authors.push(new Author($(`#${blogId}-author-name`).val(), $(`#${blogId}-author-age`).val()));
//         BlogService.updateBlog(blog)
//         .then(() => {
//           return BlogService.getAllBlogs();
//         })
//         .then((blogs) => this.render(blogs));
//       }
//     }
//   }

//   static deleteAuthor(blogId, authorName) {
//     for (let blog of this.blogs) {
//       if (blog._id == blogId) {
//         for (let author of blog.authors) {
//           if(author.name == authorName) {
//             blog.authors.splice(blog.authors.indexOf(author), 1);
//             BlogService.updateBlog(blog)
//               .then(() => {
//                 return BlogService.getAllBlogs();
//               })
//               .then((blogs) => this.render(blogs));
//           }
//         }
//       }
//     }
//   }
// }

// $('#create-new-blog').click(() => {
//   DOMManager.createBlog($('#new-blog-name').val());
//   $('#new-blog-name').val('');
// });

// DOMManager.getAllBlogs();


export default App;
