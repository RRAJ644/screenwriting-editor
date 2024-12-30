import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const url = process.env.MONGO_URL!
    await mongoose.connect(url)
  } catch (error) {
    throw new Error('error ' + error)
  }
}

export default connectDB
