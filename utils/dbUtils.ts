import mongoose, { Schema, Document, Model } from 'mongoose';

export const createModel = <T extends Document>(name: string, schema: Schema<T>): Model<T> => {
  if (!mongoose.models[name]) {
    return mongoose.model<T>(name, schema);
  }
  return mongoose.models[name] as Model<T>;
};
