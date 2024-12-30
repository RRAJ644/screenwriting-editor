import { createModel } from '@/utils/dbUtils'
import mongoose from 'mongoose'

const scriptSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const Script = createModel('Script', scriptSchema)

export default Script
