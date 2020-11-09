import express from 'express'
import {
    findAll,
    findUserById,
    createUser
} from '../controllers/user'
const router = express.Router()
router.get('/', findAll)
router.get('/:userId', findUserById)
router.post('/create', createUser)

// router.get('/', async(req, res, next) => {
//     const createdUsers = await User.
// })


export default router
