import { Document, Schema, model } from "mongoose";

export interface IUserData extends Document {
  email?: string;
  firstName?: string;
  lastName?: string;
}

const UserDataSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true }
});

export default model<IUserData>("UserData", UserDataSchema);
