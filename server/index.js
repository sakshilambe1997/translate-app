import express from "express"
import dotenv from "dotenv"
dotenv.config();
import mongoose from "mongoose";
import cors from "cors"
import { postSignup } from "./controllers/user.js";

const app = express();
app.use(express.json());
app.use(cors());

const connectDB = async ()=>{
    const conn = await mongoose.connect(process.env.MONGODB_URL);
   if(conn){
    console.log("MongoDb connected succesfully");
   }
}
connectDB();


app.post("/signup",postSignup)

const PORT = process.env.PORT || 5000;

app.listen(PORT ,()=>{
    console.log(`server is running on PORT ${PORT}`)
});




