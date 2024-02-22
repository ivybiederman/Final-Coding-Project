const api_endpoint = "https://65a0b515600f49256fb02c99.mockapi.io/blogs";

class Api {
    // Method to fetch all blogs from the API
    getAllBlogs = async () => {
        try {
            const response = await fetch(api_endpoint);
            const blogs = await response.json();
            // console.log("mock api data:", blogs);
            return blogs;
        } catch (error) {
            console.error("Error fetching blogs:", error);
            return [];
        }
    }

    // Method to post a new blog to the API
    postToBlog = async (blogTitleData, blogAuthorData) => {
        try {
            let newBlog = {
                "title": blogTitleData,
                "author": "Marc Watsica",
            }
            console.log("Posting to the blog...", newBlog);
            const response = await fetch(api_endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newBlog)
            });
            const newBlogResponse = await response.json();
            console.log("New blog created:", newBlogResponse);
            return newBlogResponse;
        } catch (error) {
            console.error("Error posting to blog:", error);
            return null;
        }
    }

    // Method to update an existing blog in the API
    updateBlog = async (blogId, UpdatedTitleData) => {
        try {
            let updatedBlogData = {
                "title": UpdatedTitleData,
                "author": "Marc Watsica",
            }
            console.log("Updating blog...", blogId, updatedBlogData);
            const response = await fetch(`${api_endpoint}/${blogId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedBlogData)
            });
            const updatedBlog = await response.json();
            console.log("Updated blog:", updatedBlog);
            return updatedBlog;
        } catch (error) {
            console.error("Error updating blog:", error);
            return null;
        }
    }

    // Method to delete a blog from the API
    deleteBlog = async (blogId) => {
        try {
            console.log("Deleting blog...", blogId);
            await fetch(`${api_endpoint}/${blogId}`, {
                method: 'DELETE'
            });
            console.log("Blog deleted successfully.");
            return true; // Return a success message
        } catch (error) {
            console.error("Error deleting blog:", error);
            return false; // Return false to indicate failure
        }
    }
}

const apiInstance = new Api();
export default apiInstance;
