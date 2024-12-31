import { createModel } from '@/utils/dbUtils'
import mongoose, { Schema } from 'mongoose'

const transitionSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const Transition = createModel('Transition', transitionSchema)

export default Transition
