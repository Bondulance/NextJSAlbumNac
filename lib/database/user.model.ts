import { Schema, models, model, Document } from "mongoose";
import Rank from "./rank.model";

export interface IUser extends Document {
  clerkId: string;
  name: string;
  username: string;
  email: string;
  picture: string;
  lists: Schema.Types.ObjectId[]; // Assuming Rank model has ObjectId type
  joinedAt: Date;
}

const UserSchema: any = new Schema({
  clerkId: { type: String, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  picture: { type: String, required: true },
  lists: [{ type: Schema.Types.ObjectId, ref: "Rank" }], // Corrected
  joinedAt: { type: Date, default: Date.now },
});

const User = models.User || model("User", UserSchema);

export default User;
