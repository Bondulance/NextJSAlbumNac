import { getRankListbyUserId } from "@/lib/actions/rank.action";
import Image from "next/image";
import React from "react";

interface Props {
  userId: string;
  clerkId: string | null;
}

const RanklistsTab = async ({ userId, clerkId }: Props) => {
  const result = await getRankListbyUserId({
    userId,
  });
  return (
    <div className="gap-3 flex items-center justify-center">
      {result.userRanklists.map((ranklist) => (
        // Make a good looking component
        <div key={ranklist._id}>
          {ranklist.title}

          <Image
            src={ranklist.picture}
            alt="user image"
            height={50}
            width={50}
            className="rounded-full"
          />
          {ranklist.author}
        </div>
      ))}
    </div>
  );
};

export default RanklistsTab;
