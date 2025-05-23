import express from 'express'
import { login, register } from '../Controllers/User.js'

const router = express.Router()

//user register
router.post('/register', register)   //this means /api/user/register

//User Login
router.post('/login', login)

export default router