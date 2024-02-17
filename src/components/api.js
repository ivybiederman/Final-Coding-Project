const api_endpoint = "https://65a0b515600f49256fb02c99.mockapi.io/blogs";

class Api {
    getAllBlogs = async () => {
        try {
            const response = await fetch(api_endpoint);
            const blogs = await response.json();
            console.log("mock api data:", blogs);
            return blogs;
        } catch (error) {
            console.error("Error fetching blogs:", error);
            return [];
        }
    }

    postToBlog = async (blogData) => {
        try {
            console.log("Posting to the blog...", blogData);
            const response = await fetch(api_endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(blogData)
            });
            const newBlog = await response.json();
            console.log("New blog created:", newBlog);
            return newBlog;
        } catch (error) {
            console.error("Error posting to blog:", error);
            return null;
        }
    }

    updateBlog = async (blogId, updatedData) => {
        try {
            console.log("Updating blog...", blogId, updatedData);
            const response = await fetch(`${api_endpoint}/${blogId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedData)
            });
            const updatedBlog = await response.json();
            console.log("Updated blog:", updatedBlog);
            return updatedBlog;
        } catch (error) {
            console.error("Error updating blog:", error);
            return null;
        }
    }

    deleteBlog = async (blogId) => {
        try {
            console.log("Deleting blog...", blogId);
            const response = await fetch(`${api_endpoint}/${blogId}`, {
                method: 'DELETE'
            });
            const deletedBlog = await response.json();
            console.log("Deleted blog:", deletedBlog);
            return deletedBlog;
        } catch (error) {
            console.error("Error deleting blog:", error);
            return null;
        }
    }
}

const apiInstance = new Api();
export default apiInstance;