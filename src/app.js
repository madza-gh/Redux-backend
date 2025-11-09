import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import productsRoutes from "./routes/productsRoutes.js"
import userRoutes from "./routes/userRoutes.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/products',productsRoutes)

app.use('/api/users', userRoutes)

app.get('/',(req, res) => {
    res.send("api is working.")
})


export default app