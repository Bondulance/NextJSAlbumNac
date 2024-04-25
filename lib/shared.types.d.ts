import { Schema } from "mongoose";
import { IUser } from "./database/user.model";

export interface CreateRanklistParams {
  title: string;
  description: string;
  genre: string;
  author: Schema.Types.ObjectId | IUser | string;
  path: string;
}

export interface GetRankListbyUserIdParams {
  page?: number;
  pageSize?: number;
  searchQuery?: string;
  filter?: string;
}

export interface CreateUserParams {
  clerkId: string;
  name: string;
  username: string;
  email: string;
  picture: string;
}

export interface UpdateUserParams {
  clerkId: string;
  updateData: Partial<IUser>;
  path: string;
}

export interface DeleteUserParams {
  clerkId: string;
}
