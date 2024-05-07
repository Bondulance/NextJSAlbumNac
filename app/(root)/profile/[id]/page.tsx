import { getUserById, getUserInfo } from "@/lib/actions/user.action";
import { URLProps } from "@/lib/shared.types";
import React from "react";

const Page = async ({ params }: URLProps) => {
  const result = await getUserInfo({
    userId: params.id,
  });
  return <div>{result.user.name}</div>;
};

export default Page;
