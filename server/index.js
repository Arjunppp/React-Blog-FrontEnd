import express from 'express';
import { connectToDatabase } from './connection.js';
import { config } from "dotenv";
import { blogRouter } from './routes/blogRouter.js';
import cors from 'cors';





config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const port = process.env.PORT;
const connectionURL = process.env.MONGO_URL;
await connectToDatabase(connectionURL);


app.use('/' , blogRouter);

app.listen(port ,() => 
{
    console.log("Application is running on Port" ,port);
    
})