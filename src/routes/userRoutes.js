import express from "express"
import { loginUser, registerUser, getUserProfile } from "../controllers/userController.js"
import { protect } from "../middleware/authMiddleware.js"

const userRoutes = express.Router()

userRoutes.post('/login', loginUser)
userRoutes.post('/signUp', registerUser)
userRoutes.get('/profile',protect , getUserProfile)

export default userRoutes