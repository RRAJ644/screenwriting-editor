import { createModel } from '@/utils/dbUtils'
import mongoose, { Schema } from 'mongoose'

const characterSchema = new mongoose.Schema(
  {
    description: {
      type: Schema.Types.Mixed,
      required: true,
    },
  },
  { timestamps: true }
)

const Character = createModel('Character', characterSchema)

export default Character
