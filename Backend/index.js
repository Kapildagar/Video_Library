import express, { json } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import routes from "./routes/video.routes.js";
import cors from 'cors';

const app=express();
dotenv.config();
app.use(cors())
app.use("/api/v1",routes);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('../temp'))

console.log(process.env.PORT)
console.log(process.env.MONGO_DB_USER);
console.log(process.env.MONGO_DB_PASSWORD)
const dbconn =async()=>{

    try{    
         await mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.rwnzodx.mongodb.net/?retryWrites=true&w=majority`)
        console.log("connected to Db");
    }
    catch(err){
            console.log(err);
    }
}


app.listen(process.env.PORT||5000,async()=>{
    await dbconn();
    console.log(`server running on port:${process.env.PORT}`);
})

