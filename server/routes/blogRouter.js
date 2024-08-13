import express from 'express';
import * as blogController from '../controllers/blogController.js';

export const  blogRouter = express.Router();


blogRouter.route('/').get(blogController.handleGetAllBlogs).post(blogController.handleCreateBlog);