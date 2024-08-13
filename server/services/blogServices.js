import { Blog } from "../modals/blogModel.js"




export const gettAllBlogs = async () => {
    try {
        const allBlogs = await Blog.find({});
        return allBlogs;

    } catch (error) {
        throw error

    }
};

export const createBlog = async (title, content) => {
    try {
        const newBlog = new Blog({ title, content });
        await newBlog.save();

    } catch (error) {
        throw error;

    }

};