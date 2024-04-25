import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN, // Allow requests from any origin
    optionsSuccessStatus: 200 ,// Explicitly setting the success status
    Credentials:true
}));



app.use(express.json({limit:"16kb"})); // limit the json request 

app.use(express.urlencoded({extended:true,limit:"16kb"}));  //to accept data from url

app.use(express.static("public")) // for storing asset statically

app.use(cookieParser()) // to access & set user's broswer's cookie

// router

import userRouter from './routes/user.routes.js'


//routes declaration

app.use('/api/v1/users',userRouter)



export { app };
