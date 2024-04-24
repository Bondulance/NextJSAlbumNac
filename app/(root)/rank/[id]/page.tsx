import NewRanking from "@/components/NewRanking";
import Ranking from "@/components/Ranking";
import { getRankList } from "@/lib/actions/rank.action";
import React from "react";

const Page = async () => {
  const result = await getRankList({});
  return (
    <div className="mt-10 px-10 w-full">
      <div className="grid grid-cols-5 grid-rows-3 gap-2">
        <NewRanking
          title="New Ranking"
          plus
          otherStyles="border-dashed border-2 border-n-400"
          href="/newrank"
        />

        {result.ranklists.length > 0
          ? result.ranklists.map((ranklist) => (
              <Ranking
                key={ranklist._id}
                _id={ranklist._id}
                title={ranklist.title}
                description={ranklist.description}
                genre={ranklist.genre}
                author={ranklist.author}
                createdAt={ranklist.createdAt}
                views={ranklist.views}
              />
            ))
          : "No rank lists yet"}
      </div>
    </div>
  );
};

export default Page;
