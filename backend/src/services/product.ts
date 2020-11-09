import Product, { ProductDocument } from '../models/Product'

//create
function create(product: ProductDocument): Promise<ProductDocument> {
  return product.save()
}

//find all
function findAll(): Promise<ProductDocument[]> {
  return Product.find().sort({ name: 1 }).exec()
}

//find by id
function findById(productId: string): Promise<ProductDocument> {
  return Product.findById(productId)
    .exec()
    .then((product) => {
      if (!product) throw new Error(`Product ${productId} not found`)
      return product
    })
}

//find by name
function findProductByName(name: string): Promise<ProductDocument | null> {
  return Product.findOne({ name: name }).exec()
}

//update
function update(
  productId: string,
  update: Partial<ProductDocument>
): Promise<ProductDocument> {
  return Product.findById(productId)
    .exec()
    .then((product) => {
      if (!product) {
        throw new Error(`Product ${productId} not found`)
      }

      if (update.name) {
        product.name = update.name
      }
      if (update.description) {
        product.description = update.description
      }
      if (update.price) {
        product.price = update.price
      }
      if (update.countInStock) {
        product.countInStock = update.countInStock
      }
      if (update.sizes) {
        product.sizes = update.sizes
      }
      if (update.categories) {
        product.categories = update.categories
      }
      return product.save()
    })
}

//delete
function deleteProduct(ProductId: string): Promise<ProductDocument | null> {
    return Product.findByIdAndDelete(ProductId).exec()
}

export default {
    create,
    findAll,
    findById,
    findProductByName,
    update,
    deleteProduct,
  }