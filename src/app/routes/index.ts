
import express from 'express'
import { UserRoutes } from '../../modules/users/user.route'
const router = express.Router()
router.use('/user',UserRoutes)
export default router