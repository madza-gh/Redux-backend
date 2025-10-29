import mongoose from "mongoose";
import dotenv from 'dotenv'
import app from './app.js'


dotenv.config()

const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI

if (!MONGO_URI){
    console.error('MONGO_URI not set in .env')
    process.exit(1)
}

mongoose.connect(MONGO_URI)
.then(()=> {
    console.log('CONNECTED TO MONGODB')
    app.listen(PORT, ()=>{
        console.log(`server running on port ${PORT}`)
    })
})
.catch((err)=>{
    console.log('failed to connect to mongoDB',err.message)
    process.exit(1)
})

