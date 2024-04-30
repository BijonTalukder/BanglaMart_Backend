
import express from 'express'
import { UserRoutes } from '../../modules/users/user.route'
import { AuthRouter } from '../../modules/auth/auth.route'
const router = express.Router()
router.use('/user',UserRoutes)
router.use('/auth',AuthRouter)
export default router