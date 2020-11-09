import mongoose, { Document } from 'mongoose'

export type ProductDocument = Document & {
  name: string
  description: string
  categories: string[]
  sizes: string[]
  image: string
  price: number
  brand: string
  rating: number
  numReviews: number
  countInStock: number
}

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    index: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  categories: [String],
  sizes: [String],
  countInStock: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  numReviews: {
    type: Number,
    required: true,
  },
},
{
  timestamps: true
})

export default mongoose.model<ProductDocument>('Product', productSchema)
