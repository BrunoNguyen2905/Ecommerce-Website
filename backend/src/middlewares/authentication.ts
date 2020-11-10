import { JWT_SECRET } from '../util/secrets'
import jwt from 'jsonwebtoken'

export const generateToken = (user: any) => {
  return jwt.sign({
    _id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    isAdmin: user.isAdmin,
  }, JWT_SECRET, {
      expiresIn: '30d'
  })
}
