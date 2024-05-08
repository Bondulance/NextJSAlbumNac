import NewRanking from "@/components/NewRanking";
import RanklistsTab from "@/components/RanklistsTab";
import { getUserById, getUserInfo } from "@/lib/actions/user.action";
import { URLProps } from "@/lib/shared.types";
import { auth } from "@clerk/nextjs";
import React from "react";

const Page = async ({ params }: URLProps) => {
  const { userId: clerkId } = auth();
  const result = await getUserInfo({
    userId: params.id,
  });
  return (
    <div className="relative w-full flex flex-col mt-10 px-10">
      <div className=" flex items-center justify-center flex-col">
        <h1 className="text-2xl text-n-400 font-bold">
          Hello, <span className="text-n-200">{result.user.name}</span>
        </h1>
        <p className="text-n-400 mt-3 text-md text-center">
          To get started in ranking, click on the New Ranking Box. Then you will
          be able to edit and rank all your favorite music!
        </p>
      </div>
      <NewRanking href="/newrank" title="New Ranking" plus />

      <div className="mt-10">
        <RanklistsTab userId={result.user._id} clerkId={clerkId} />
      </div>
    </div>
  );
};

export default Page;
