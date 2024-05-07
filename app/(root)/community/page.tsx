import { getUsers } from "@/lib/actions/user.action";
import { users } from "@clerk/nextjs/api";
import React from "react";
import { map } from "svix/dist/openapi/rxjsStub";

const Page = async () => {
  const result = await getUsers({});
  return (
    <div>
      {result.users.map((user) => (
        <div className="text-n-400" key={user.id}>
          {user.name} - {user.username}
        </div>
      ))}
    </div>
  );
};

export default Page;
