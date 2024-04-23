import NewRanking from "@/components/NewRanking";
import React from "react";

const page = () => {
  return (
    <div className="mt-10 px-10 w-full">
      <div className="grid grid-cols-5 grid-rows-3 gap-2">
        <NewRanking
          title="New Ranking"
          plus
          otherStyles="border-dashed border-2 border-n-400"
          href="/newrank"
        />
      </div>
    </div>
  );
};

export default page;
