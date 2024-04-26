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

export async function getRankListbyId(params: getRankListbyIdParams) {
  try {
    connectToDatabase();

    const { rankId } = params;

    const rank = await Rank.findById(rankId).populate({
      path: "author",
      model: User,
      select: "_id clerkId name picture",
    });

    return rank;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
