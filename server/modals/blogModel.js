import mongoose from 'mongoose';


const blogSchema = mongoose.Schema({
    title:{
        type:"string",
        required:"true",
        unique:true
    },
    content:{
        type:"string",
        required:"true"
    }
});


export const Blog =  mongoose.model('Blog' , blogSchema);

