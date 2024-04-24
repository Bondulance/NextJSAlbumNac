import Link from "next/link";
import React from "react";

interface Props {
  createdAt: Date;
  views: number;
  author: string;
  genre: string;
  description: string;
  title: string;
  _id: string;
}

const Ranking = ({
  createdAt,
  views,
  author,
  genre,
  description,
  title,
  _id,
}: Props) => {
  return (
    <Link href={`/ranklist/${_id}`}>
      <div className="border-n-400 border-2 py-5 px-2">
        <div className="py-2">
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="flex gap-2">
            <p>{genre}</p>
            <p>{author}</p>
            <p>{views}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Ranking;
