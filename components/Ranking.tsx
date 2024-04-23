"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  otherStyles?: string;
  href?: string;
  title: string;
  plus?: boolean;
  handleClick?: boolean;
}

export const handleNewRanking = () => {};

const Ranking = ({ otherStyles, href, title, plus, handleClick }: Props) => {
  return (
    <button onClick={handleNewRanking}>
      <div
        className={`${otherStyles} py-8 px-2 flex items-center justify-center flex-col bprder-n-400 bg-n-100`}
      >
        {plus === true ? (
          <div className="py-2">
            <Image
              src="/assets/plus.png"
              className="invert filter"
              height={50}
              width={50}
              alt="plus"
            />
          </div>
        ) : (
          ""
        )}

        <h1 className="text-n-400 font-semibold">{title}</h1>
      </div>
    </button>
  );
};

export default Ranking;
