"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  return (
    <div>
      <h1>Rank List for {searchParams} </h1>
    </div>
  );
};

export default Page;
