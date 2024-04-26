import { musicApps } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Artist = () => {
  return (
    <div className="flex items-center justify-center px-10 flex-col">
      <h1 className="text-[2rem] font-bold text-n-400 text-center max-sm:text-[1.5rem]">
        All Albums on All Streaming Services
      </h1>
      <p className="text-n-400 text-center max-sm:tracking-tight max-sm:mt-3 mt-1">
        Utilizing the powerful Spotify API, any albums you love we have.
      </p>

      <div className="mt-7 flex gap-5 max-sm:gap-1 max-sm:mt-5 overflow-x-scroll">
        {musicApps.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-center border-n-400 rounded-lg py-3 px-4 shrink-0"
          >
            <Link href={item.href} key={item.id}>
              <Image
                src={item.picture}
                alt={item.title}
                width={100}
                height={100}
                className="cursor-pointer"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artist;
