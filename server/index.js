import express from 'express'
import router from './routes/route.js'
import cors from "cors"
const app = express()
import { DBconnect } from './database/db.js'

const PORT =8000
app.use(cors())

DBconnect()
app.use ('/',router)

app.listen (PORT, ()=>{
    console.log(`Server Running on PORT : ${PORT}`);    
})