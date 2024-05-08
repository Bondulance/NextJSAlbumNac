"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { ScrollParallax } from "react-just-parallax";
import Button from "./Button";
import { useAuth } from "@clerk/nextjs";
import StaticCard from "./StaticCard";
import BouncyButton from "./oneuse/BouncyButton";

const Hero = () => {
  const [startIndex, setStartIndex] = useState(0);
  const albumsPerPage = 5;
  const id = useAuth();
  const totalAlbums = 20; // Assuming you have 10 albums in total
  const parallaxRef = useRef(null);

  const handleAlbums = (direction: string) => {
    let nextStartIndex;
    if (direction === "left") {
      nextStartIndex = (startIndex - albumsPerPage + totalAlbums) % totalAlbums;
    } else {
      nextStartIndex = (startIndex + albumsPerPage) % totalAlbums;
    }
    setStartIndex(nextStartIndex);
  };

  return (
    <>
      <div className="flex items-center justify-center gap-3 max-sm:hidden">
        <button onClick={() => handleAlbums("left")}>
          <Image
            alt="left"
            src="/assets/right-arrow.svg"
            width={40}
            height={40}
            className="cursor-pointer filter invert rotate-180"
          />
        </button>

        {[...Array(albumsPerPage)].map((_, index) => {
          let height = 175;
          let width = 175;

          if (index === 0 || index === 4) {
            height = width = 150;
          } else if (index === 2) {
            height = width = 200;
          }

          return (
            <StaticCard
              height={height}
              width={width}
              imgSrc={`/assets/album/image${
                ((startIndex + index) % totalAlbums) + 1
              }.png`}
              key={`image${((startIndex + index) % totalAlbums) + 1}`}
            />
          );
        })}

        <button onClick={() => handleAlbums("right")}>
          <Image
            alt="right"
            src="/assets/right-arrow.svg"
            width={40}
            height={40}
            className="cursor-pointer filter invert "
          />
        </button>
      </div>

      <div className="hidden max-sm:flex gap-2 flex-row no-wrap">
        <StaticCard
          height={200}
          width={200}
          imgSrc="/assets/album/image1.png"
          otherClasses="shrink-0"
        />
        <StaticCard
          height={200}
          width={200}
          imgSrc="/assets/album/image2.png"
          otherClasses="shrink-0"
        />
        <StaticCard
          height={200}
          width={200}
          imgSrc="/assets/album/image3.png"
          otherClasses="shrink-0"
        />
      </div>
    </>
  );
};

export default Hero;
