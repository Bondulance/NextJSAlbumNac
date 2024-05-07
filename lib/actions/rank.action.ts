"use server";

import { revalidatePath } from "next/cache";
import Rank from "../database/rank.model";
import { connectToDatabase } from "../mongoose";
import {
  CreateRanklistParams,
  GetRankListbyUserIdParams,
  getRankListbyIdParams,
} from "../shared.types";
import Lists from "../database/lists.model";
import User from "../database/user.model";

export async function createRankList(params: CreateRanklistParams) {
  try {
    connectToDatabase();

    const { title, description, genre, author, path } = params;

    const rank = await Rank.create({
      title,
      description,
      genre,
      author,
    });

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getRankListbyUserId(params: GetRankListbyUserIdParams) {
  try {
    connectToDatabase();

    const { userId, page = 1, pageSize = 8, searchQuery } = params;

    const userRanklists = await Rank.find({ author: userId })
      .sort({ createdAt: -1 })
      .limit(pageSize)
      .populate("author", "_id clerkId name picture");

    return { userRanklists };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
