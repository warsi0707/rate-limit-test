import { config } from 'dotenv'
import 'dotenv/config'
config()
import mongoose from "mongoose"

let Ddurl = process.env.MONGO_URL;

export const ConnectDb =async ()=>{
    await mongoose.connect(Ddurl as string)
    console.log("Database connected successfully")
}

