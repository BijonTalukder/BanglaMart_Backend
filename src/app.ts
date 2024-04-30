import express, { Application, Response,Request } from "express"
import cors from 'cors'
import cookieParser from 'cookie-parser'
import router from "./app/routes";
const app:Application = express();
const port = 3000;
app.use(cors())
//parser
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use('/api/v1',router)
app.get("/",(req:Request,res:Response)=>{
    res.send('Hello World!')
})



export default app