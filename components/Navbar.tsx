"use client";
import { links, navcontent } from "@/constants";
import { SignedIn, SignedOut, UserButton, useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Button from "./Button";

const NavContent = () => {
  const pathname = usePathname();
  const { userId } = useAuth();
  return (
    <>
      <div className="flex mt-10 flex-col gap-2">
        {navcontent.map((item) => {
          const isActive =
            (pathname.includes(item.href) && item.href.length > 1) ||
            pathname === item.href;

          if (item.href === "/rank") {
            if (userId) {
              console.log(userId);
              item.href === `${item.href}/${userId}`;
            } else {
              return null;
            }
          }

          return (
            <Link key={item.id} href={item.href}>
              <div
                className={`rounded-xl px-2 flex items-center mt-2 w-full py-2 ${
                  isActive ? "bg-n-300" : ""
                } `}
              >
                <Image
                  src={item.picture}
                  height={50}
                  width={50}
                  alt="pic"
                  className="cursor-pointer filter invert"
                />
                <div className="pl-10">
                  <h1 className="text-n-400 font-semibold">{item.title}</h1>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <SignedOut>
        <div className="mt-14 w-full flex justify-center gap-5">
          <Button title="Log in" otherClasses="bg-n-200" href="/sign-in" />
          <Button
            title="Sign Up"
            otherClasses="bg-n-100 border border-n-300 text-n-400"
            href="/sign-up"
          />
        </div>
      </SignedOut>
    </>
  );
};

const Navbar = () => {
  return (
    <div className="w-full flex bg-n-100 items-center justify-between flex-row shadow-xl transition ease-out z-30 relative">
      <div className="flex justify-start">
        <Link href="/" className="flex items-center py-1">
          <Image
            src="/assets/logo.png"
            height={70}
            width={70}
            alt="logo"
            className="cursor-pointer "
          />
          <h1 className="font-bold text-n-200 text-lg max-sm:hidden">
            albumnac.
          </h1>
        </Link>
      </div>

      <div className="flex items-center gap-12 pr-10">
        {links.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="cursor-pointer text-n-400 hover:underline hover:text-n-200 transition ease-in max-md:hidden"
          >
            <h1>{item.title}</h1>
          </Link>
        ))}
        <div className="pl-24">
          <SignedIn>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "h-8 w-8",
                },
                variables: {
                  colorPrimary: "#4717f6",
                },
              }}
            />
          </SignedIn>
        </div>
        <div className="max-md:flex hidden">
          <Sheet>
            <SheetTrigger>
              <Image
                src="/assets/hamburger.svg"
                height={50}
                width={50}
                alt="menu"
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="bg-n-100">
              <SheetHeader>
                <SheetTitle className="flex text-n-200 items-center">
                  <Image
                    src="/assets/logo.png"
                    width={70}
                    height={70}
                    alt="logo"
                  />
                  <h1>albumnac.</h1>
                </SheetTitle>
                <SheetDescription>
                  <NavContent />
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
