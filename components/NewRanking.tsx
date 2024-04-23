"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import { usePathname } from "next/navigation";

interface Props {
  otherStyles?: string;
  href: string;
  title: string;
  plus?: boolean;
}

const NewRanking = ({ otherStyles, title, plus, href }: Props) => {
  return (
    <Link href={href}>
      <div
        className={`${otherStyles} py-8 px-2 flex items-center justify-center flex-col`}
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
    </Link>
  );
};

export default NewRanking;
