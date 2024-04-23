import { Schema } from "mongoose";
import { IUser } from "./database/user.model";

export interface CreateRanklistParams {
  title: string;
  description: string;
  genre: string;
  author: Schema.Types.ObjectId | IUser;
  path: string;
}
