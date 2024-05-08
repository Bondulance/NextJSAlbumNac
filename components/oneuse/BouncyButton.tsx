"use client";
import React from "react";
import Button from "../Button";
import { getUserById } from "@/lib/actions/user.action";
import { useAuth } from "@clerk/nextjs";

const BouncyButton = () => {
  const { userId } = useAuth();

  return (
    <Button
      title="Start Ranking.."
      otherClasses="bg-white text-n-100 shadow-lg"
      href={`/profile/${userId}`}
    />
  );
};

export default BouncyButton;
