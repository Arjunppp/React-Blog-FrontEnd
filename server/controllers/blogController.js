import * as blogServices from "../services/blogServices.js";



export const handleGetAllBlogs = async (req, res) => {
    try {


        const blogs = await blogServices.gettAllBlogs();
        res.status(200).send({ blogs });

    } catch (error) {

        console.error(error);


    }

};

export const handleCreateBlog = async (req, res) => {

    try {
        console.log(req.body ,"its the  request");
        
        const { title, content } = req.body;
        await blogServices.createBlog(title, content);
        res.status(200).send('Ok');
    } catch (error) {
        console.error(error);
    }


};