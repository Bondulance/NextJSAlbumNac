import RankForm from "@/components/form/RankForm";
import { getUserById } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const mongoUser = await getUserById({ userId });

  return (
    <div className="mt-10 flex-col px-10 w-1/2 max-sm:w-full">
      <h1 className="text-n-400 font-bold text-[2rem]">Make Rank</h1>
      <div className="mt-6">
        <RankForm mongoUserId={JSON.stringify(mongoUser?._id)} />
      </div>
    </div>
  );
};

export default Page;
