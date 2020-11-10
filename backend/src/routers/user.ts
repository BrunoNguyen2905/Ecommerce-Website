import express from 'express'
import {
    findAll,
    findUserById,
    register,
    signIn
} from '../controllers/user'
const router = express.Router()
router.get('/', findAll)
router.get('/:userId', findUserById)
router.post('/signin', signIn )
router.post('/register', register)


export default router
