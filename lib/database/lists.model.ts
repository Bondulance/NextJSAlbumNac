import { Schema, models, model, Document } from "mongoose";

export interface IList extends Document {
  title: string;
  artist: string;
  score: number;
  picture: string;
}

const ListSchema = new Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  score: { type: Number, required: true },
  picture: { type: String, required: true },
});

const Lists = models.Lists || model("Lists", ListSchema);

export default Lists;
