import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './db/index.js';

dotenv.config();

const app= express();
const PORT= 8000

app.use(cors());
app.use(express.json({limit : '50mb'}))

app.get('/', (req, res)=>{
    res.send("Hello World")
})






connectDB()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running at ${PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGODB Connecton Failed !!!", err)
})

