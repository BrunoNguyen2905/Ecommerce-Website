import User, { UserDocument } from '../models/User'

//create
function create(user: UserDocument): Promise<UserDocument> {
  return user.save()
}

//find all
function findAll(): Promise<UserDocument[]> {
  return User.find().sort({ firstName: 1 }).exec() // .exec() will return a true Promise
}

//find by id
function findById(userId: string): Promise<UserDocument> {
  return User.findById(userId)
    .exec()
    .then((user) => {
      if (!user) throw new Error(`User ${userId} not found`)
      return user
    })
}

//find by email
function findUserByEmail(email: string): Promise<UserDocument | null> {
    return User.findOne({ email: email }).exec()
  }
//update
function update(
  userId: string,
  update: Partial<UserDocument>
): Promise<UserDocument> {
  return User.findById(userId)
    .exec()
    .then((user) => {
      if (!user) {
        throw new Error(`User ${userId} not found`)
      }

      if (update.firstName) {
        user.firstName = update.firstName
      }
      if (update.lastName) {
        user.lastName = update.lastName
      }
      if (update.email) {
        user.email = update.email
      }
      if (update.password) {
        user.password = update.password
      }
      // Add more fields here if needed
      return user.save()
    })
}

//delete
function deleteUser(userId: string): Promise<UserDocument | null> {
  return User.findByIdAndDelete(userId).exec()
}

export default {
  create,
  findAll,
  findById,
  findUserByEmail,
  update,
  deleteUser,
}
