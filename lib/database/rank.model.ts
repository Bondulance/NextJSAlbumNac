import { Schema, model, models, Document } from "mongoose";
import Lists from "./lists.model";
import User from "./user.model";

export interface IRank extends Document {
  title: string;
  description: string;
  genre: string;
  views: number;
  createdAt: Date;
  author: Schema.Types.ObjectId;
  listItems: Schema.Types.ObjectId[];
}
//@ts-ignore
const RankSchema = new Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  genre: { type: String },
  views: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  author: { type: Schema.Types.ObjectId, ref: User },
  listItems: [{ type: Schema.Types.ObjectId, ref: Lists }],
});
//@ts-ignore
const Rank = models.Rank || model("Rank", RankSchema);
//@ts-ignore
export default Rank;
