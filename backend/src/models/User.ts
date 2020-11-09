import mongoose, { Document } from 'mongoose'

// import { ProductDocument } from './Product'

export type UserDocument = Document & {
  firstName: string
  lastName: string
  email: string
  password: string
  isAdmin: boolean
  //   inCart: any[];
}

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
      required: true,
    },
    //   inCart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  },
  {
    timestamps: true,
  }
)

export default mongoose.model<UserDocument>('User', userSchema)
