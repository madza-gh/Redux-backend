import express from "express"
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js"


const productsRoutes = express.Router()


productsRoutes.get('/', getProducts)

productsRoutes.get('/:id', getProductById)

productsRoutes.post('/',createProduct)

productsRoutes.put('/:id', updateProduct)

productsRoutes.delete('/:id', deleteProduct)

export default productsRoutes