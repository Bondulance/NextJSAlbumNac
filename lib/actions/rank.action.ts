"use server";

import { revalidatePath } from "next/cache";
import Rank from "../database/rank.model";
import { connectToDatabase } from "../mongoose";
import { CreateRanklistParams } from "../shared.types";

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
