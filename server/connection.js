import mongoose  from "mongoose";



export const connectToDatabase = async (connectionURL) => 
{
    mongoose.connect(connectionURL).then(() => console.log('Data base is connected'));
}