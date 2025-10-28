import {express} from express
import {dotenv} from dotenv
import {cors} from cors
import productRoutes from "./routes/productRoutes.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/products',productRoutes)


app.get('/',(req, res) => {
    res.send("api is working.")
})


export default app