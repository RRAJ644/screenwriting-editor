import mongoose from 'mongoose'
import { ERROR_MESSAGES } from '@/constants/constants'

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log(ERROR_MESSAGES.DB_ERRORS.ALREADY_CONNECTED)
    return
  }
  try {
    const url = process.env.MONGO_URL
    if (!url) {
      throw new Error(ERROR_MESSAGES.DB_ERRORS.MISSING_URL)
    }
    const connection = await mongoose.connect(url)
    console.log('MongoDB connected:', connection.connection.host)
    console.log(ERROR_MESSAGES.DB_CONNECTION.CONNECTION_ESTABLISHED)
    return connection
  } catch (error) {
    if (error instanceof Error) {
      console.error(ERROR_MESSAGES.DB_ERRORS.CONNECTION_ERROR, error.message)
      throw new Error(ERROR_MESSAGES.DB_ERRORS.CONNECTION_FAILED)
    }
  }
}

export default connectDB
