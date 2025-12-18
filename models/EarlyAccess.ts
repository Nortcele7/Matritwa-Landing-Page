import { Schema, models, model } from "mongoose";

export interface IEarlyAccess {
  name: string;
  email: string;
  phone: string;
  createdAt?: Date;
}

const EarlyAccessSchema = new Schema<IEarlyAccess>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true, unique: true },
    phone: { type: String, required: true, trim: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default models.EarlyAccess || model<IEarlyAccess>("EarlyAccess", EarlyAccessSchema);
