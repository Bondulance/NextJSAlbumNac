import RankForm from "@/components/form/RankForm";
import React from "react";

const page = () => {
  return (
    <div className="mt-10 flex-col px-10 w-1/2 max-sm:w-full">
      <h1 className="text-n-400 font-bold text-[2rem]">Make Rank</h1>
      <div className="mt-6">
        <RankForm />
      </div>
    </div>
  );
};

export default page;
