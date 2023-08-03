import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
//database connection
import connectDB from './database/mongodb.js';
import taskRoutes from './routes/taskRoutes.js';

//dot env config
dotenv.config({path:'./config/.env'});

/**
 * server setup
 */
const app=express();
app.use(cors());
app.use(express.json());

//routes
app.use('/api/v1/tasks',taskRoutes);
app.get("/",(req,res)=>{
    res.send("Hello to the server which is running at port no. 4000")
})

const port=4000;

/**
 * start function to initiate the server
 */

const start=async()=>{
    try{
        //connecting to database
        await connectDB(process.env.MONGO_URI);
        //starting server
        await app.listen(port,()=>{
            console.log(`Server is listening to port no. ${port}`)
        })

    }catch(err){
        console.log(err);

    }
}
start();