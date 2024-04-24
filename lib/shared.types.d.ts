import { Schema } from "mongoose";
import { IUser } from "./database/user.model";

export interface CreateRanklistParams {
  title: string;
  description: string;
  genre: string;
  author: Schema.Types.ObjectId | IUser | string;
  path: string;
}

export interface GetRankListParams {
  page?: number;
  pageSize?: number;
  searchQuery?: string;
  filter?: string;
}
