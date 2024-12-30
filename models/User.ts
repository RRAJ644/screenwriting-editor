import { createModel } from '@/utils/dbUtils'
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    avatar: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
      unique: [true, 'Username already exists'],
    },
    refreshToken: {
      type: String,
      required: true,
    },
    scripts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Script',
      },
    ],
  },
  { timestamps: true }
)

const User = createModel('User', userSchema)

export default User
