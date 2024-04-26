import { getRankListbyId } from "@/lib/actions/rank.action";
import Link from "next/link";
import React from "react";

const LinkList = async ({ params }: any) => {
  const result = await getRankListbyId({ rankId: params.id });
  return (
    <>
      <Link
        href={`/rank/${result.author.clerkId}`}
        className="cursor-pointer text-n-400 hover:underline hover:text-n-200 transition ease-in max-md:hidden"
      >
        <h1>Rank</h1>
      </Link>
      <Link
        href="/community"
        className="cursor-pointer text-n-400 hover:underline hover:text-n-200 transition ease-in max-md:hidden"
      >
        <h1>Community</h1>
      </Link>
      <Link
        href="/games"
        className="cursor-pointer text-n-400 hover:underline hover:text-n-200 transition ease-in max-md:hidden"
      >
        <h1>Games</h1>
      </Link>
    </>
  );
};

export default LinkList;
