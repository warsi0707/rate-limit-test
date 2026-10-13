import express, { type Request, type Response } from 'express'
import { ConnectDb } from './lib/ConnetcDb.js'
import { rateLimit } from 'express-rate-limit'
import cors from 'cors'

const app = express()

app.use(cors({
    origin: ["http://localhost:3000"]
}))

const LimiterTest = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  message: 'Too many login attempts. Try again in 5 minutes.'
});
let apiKey = "samir@123"

app.get("/api/data", LimiterTest, (req:Request, res:Response)=>{
    try{
        return res.json(
            { "message": "Request successful", "data": { "value": "Hello World" } }
        )
    }catch(error){
        return res.status(500).json({
            message: error,
            error: "Internal server error"
        })
    }
})


const main =async()=>{
    app.listen(8000)
    console.log("App is lisitng on port 8000")
    // await ConnectDb()
}
main()