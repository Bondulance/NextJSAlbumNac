import NewRanking from "@/components/NewRanking";
import { getUserInfo } from "@/lib/actions/user.action";
import { URLProps } from "@/lib/shared.types";
import { auth, useAuth } from "@clerk/nextjs";
import React from "react";

const Page = async ({ params, searchParams }: URLProps) => {
  return <div>{params.id}</div>;
};

export default Page;
