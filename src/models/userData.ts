import { Schema, model } from "mongoose";
import { IUserData } from "types";

const UserDataSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  lastName: { type: String },
  avatarUrl: { type: String }
});

export default model<IUserData>("UserData", UserDataSchema);
