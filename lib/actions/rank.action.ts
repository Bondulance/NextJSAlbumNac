"use server";

import { revalidatePath } from "next/cache";
import Rank from "../database/rank.model";
import { connectToDatabase } from "../mongoose";
import {
  CreateRanklistParams,
  GetRankListbyUserIdParams,
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

    const { page = 1, pageSize = 8, filter, searchQuery } = params;

    const ranklists = await Rank.find()
      .populate({ path: "listItems", model: Lists })
      .populate({ path: "author", model: User })
      .sort({ createdAt: -1 });

    return { ranklists };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
