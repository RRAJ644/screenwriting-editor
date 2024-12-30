import mongoose from 'mongoose'
import { createModel } from '@/utils/dbUtils'

const scenesSchema = new mongoose.Schema(
  {
    sceneHeading: {
      type: String,
      required: true,
      unique: true,
      index: 'text',
    },

    action: {
      type: String,
      required: true,
      unique: true,
      index: 'text',
    },

    description: {
      type: String,
      required: true,
      unique: true,
      index: 'text',
    },
    plays: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Play',
      },
    ],
  },
  { timestamps: true }
)

const Scenes = createModel('Scenes', scenesSchema)

export default Scenes
