import {Schema, model} from "mongoose";
import IUser from "./user.interface";

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true, unique: true }
  });
  
export default model<IUser>('User', userSchema);