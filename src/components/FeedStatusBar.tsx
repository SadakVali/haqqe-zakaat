"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const FeedStatus = [
  { title: "For You", link: "/" },
  { title: "Following", link: "/following" },
  { title: "Science", link: "/science" },
];

export default function FeedStatusBar() {
  const path = usePathname();

  return (
    <div className="flex justify-evenly sticky top-0 backdrop-blur-3xl">
      {FeedStatus.map((item) => (
        <Link
          href={item.link}
          key={item.title}
          className={`hover:bg-zinc-800 p-4 flex-grow text-center ${
            path === item.link && "border-b-4 border-b-sky-500"
          }`}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
}
