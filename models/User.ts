import { createModel } from '@/utils/dbUtils'
import mongoose, { Document } from 'mongoose'


//use of this interface??
export interface IUser extends Document {
  name: string
  email: string
  avatar?: string
  password: string,
  username: string
  refreshToken: string
  scripts: mongoose.Types.ObjectId[]
}

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
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: [true, 'Username already exists'],
    },
    refreshToken: {
      type: String,
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
