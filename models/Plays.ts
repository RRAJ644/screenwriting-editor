import { createModel } from '@/utils/dbUtils'
import mongoose from 'mongoose'

const playSchema = new mongoose.Schema(
  {
    parenthetical: {
      type: String,
      required: true,
      unique: true,
      index: 'text',
    },

    character: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Character',
    },

    dialogues: { type: [String] },

    transition: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Transition',
    },
  },
  { timestamps: true }
)

const Play = createModel('Play', playSchema)

export default Play
