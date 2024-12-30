import mongoose, { Document, Schema } from 'mongoose'

export const createModel = (name: string, schema: Schema<Document>) => {
  if (!mongoose.models[name]) {
    return mongoose.model(name, schema)
  }
  return mongoose.models[name]
}
