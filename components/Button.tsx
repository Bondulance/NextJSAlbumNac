import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  otherClasses: string;
  href: string;
}

const Button = ({ title, otherClasses, href }: Props) => {
  return (
    <Link href={href} className="cursor-pointer">
      <div className={`${otherClasses} py-2 px-3 shadow-md rounded-xl`}>
        <h1 className="text-md font-bold">{title}</h1>
      </div>
    </Link>
  );
};

export default Button;
