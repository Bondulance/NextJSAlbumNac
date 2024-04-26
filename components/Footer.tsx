import { links } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex justify-between px-3 items-center py-8 bg-n-100/90 border-n-400 border-t-2 mt-6">
      <div className="flex items-center flex-row ">
        <Link href="/" className="pr-5 max-sm:pr-0">
          <Image src="/assets/logo.png" width="100" height="100" alt="logo" />
        </Link>

        <div className="flex flex-col max-sm:mr-3">
          {links.map((item) => (
            <Link
              href={item.href}
              key={item.id}
              className="text-n-400 hover:text-n-200 py-1 hover:underline transition ease-out"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center max-sm:ml-3 max-sm:text-right">
        <p className="text-md font-bold text-n-400">
          <span className="text-n-200">albumnac.</span>@2024.All Rights Reserved
        </p>
      </div>
      <div className="max-sm:hidden">
        <Image src="/assets/record.png" height={100} width={100} alt="record" />
      </div>
    </div>
  );
};

export default Footer;
