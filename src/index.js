import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

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

class BlogService {
  static url = 'https://65a0b515600f49256fb02c99.mockapi.io/blogs';

  static getAllBlogs() {
    return $.get(this.url);
  }

  static getBlog(id) {
    return $.get(`${this.url}/${id}`);
  }

  static createBlog(blog) {
    return $.post(this.url, blog);
  }

  static updateBlog(blog) {
    return $.ajax({
      url: `${this.url}/${blog._id}`,
      dataType: 'json',
      data: JSON.stringify(blog),
      contentType: 'application/json',
      type: 'PUT'
    });
  }

  static deleteBlog(id) {
    return $.ajax({
      url: `${this.url}/${id}`,
      type: 'DELETE'
    });
  }
}

class DOMManager {
  static blogs;

  static getAllBlogs() {
    BlogService.getAllBlogs().then(blogs => this.render(blogs)); 
  }

  static createBlog(name) {
    BlogService.createBlog(new Blog(name))
    .then(() => {
      return BlogService.getAllBlogs();
    })
    .then((blogs) => this.render(blogs));
  }
  
  static deleteBlog(id) {
    BlogService.deleteBlog(id)
      .then(() => {
        return BlogService.getAllBlogs();
      })
      .then((blogs) => this.render(blogs));
  }

  static render(blogs) {
    this.blogs = blogs;
    $('#app').empty();
    for (let blog of blogs) {
      $('#app').prepend(`
        <div id="${blog._id}" class="card"> 
          <div class="card-header">
            <h2>${blog.name}</h2> 
            <button class="btn btn-danger" onclick="DOMManager.deleteBlog('${blog._id}')">Delete</button>
          </div>
          <div class="card-body">
            <div class="card">
              <div class="col-sm">
                <input type="text" id="${blog._id}-author-name" class="form-control" placeholder="Author Name">
              </div>
              <div class="col-sm">
                <input type="text" id="${blog._id}-author-age" class="form-control" placeholder="Author Age">
              </div>
              <button id="${blog._id}-new-author" onclick="DOMManager.addAuthor('${blog._id}')" class="btn btn-primary form-control">Add Author</button>
            </div>
          </div>
        </div><br>
      `);
      for (let author of blog.authors) {
        $(`#${blog._id}`).find('.card-body').append(`
          <div>
            <span><strong>Name:</strong> ${author.name}</span><br>
            <span><strong>Age:</strong> ${author.age}</span><br>
            <button class="btn btn-danger" onclick="DOMManager.deleteAuthor('${blog._id}', '${author.name}')">Delete Author</button>
          </div>
        `);
      }
    }
  }

  static addAuthor(blogId) {
    for (let blog of this.blogs) {
      if(blog._id == blogId) {
        blog.authors.push(new Author($(`#${blogId}-author-name`).val(), $(`#${blogId}-author-age`).val()));
        BlogService.updateBlog(blog)
        .then(() => {
          return BlogService.getAllBlogs();
        })
        .then((blogs) => this.render(blogs));
      }
    }
  }

  static deleteAuthor(blogId, authorName) {
    for (let blog of this.blogs) {
      if (blog._id == blogId) {
        for (let author of blog.authors) {
          if(author.name == authorName) {
            blog.authors.splice(blog.authors.indexOf(author), 1);
            BlogService.updateBlog(blog)
              .then(() => {
                return BlogService.getAllBlogs();
              })
              .then((blogs) => this.render(blogs));
          }
        }
      }
    }
  }
}

$('#create-new-blog').click(() => {
  DOMManager.createBlog($('#new-blog-name').val());
  $('#new-blog-name').val('');
});

DOMManager.getAllBlogs();
