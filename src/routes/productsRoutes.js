import express from "express"
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js"
import { admin, protect } from "../middleware/authMiddleware.js"


const productsRoutes = express.Router()


productsRoutes.get('/', getProducts)

productsRoutes.get('/:id', getProductById)

productsRoutes.post('/', protect, admin, createProduct)

productsRoutes.put('/:id', protect, admin, updateProduct)

productsRoutes.delete('/:id', protect, admin, deleteProduct)

export default productsRoutes