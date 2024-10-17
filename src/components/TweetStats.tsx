import React from "react";
import { FaRegBookmark, FaRegHeart, FaRetweet } from "react-icons/fa";
import { IoShareOutline, IoStatsChart } from "react-icons/io5";
import { RiChat1Line } from "react-icons/ri";

export default function TweetStats() {
  return (
    <div className="flex justify-between text-gray-500">
      <div className="flex group gap-1 hover:text-sky-500 relative">
        <div className="relative">
          <div className="absolute group-hover:inset-0 blur-md bg-sky-500 rounded-full"></div>
          <RiChat1Line className="w-6 h-6" />
        </div>
        <p>20</p>
      </div>
      <div className="flex group gap-1 hover:text-green-500 relative">
        <div className="relative">
          <div className="absolute group-hover:inset-0 blur-md bg-green-500 rounded-full"></div>
          <FaRetweet className="w-6 h-6" />
        </div>
        <p>20</p>
      </div>
      <div className="flex group gap-1 hover:text-red-500 relative">
        <div className="relative">
          <div className="absolute group-hover:inset-0 blur-md bg-red-500 rounded-full"></div>
          <FaRegHeart className="w-6 h-6" />
        </div>
        <p>20</p>
      </div>
      <div className="flex group gap-1 hover:text-sky-500 relative">
        <div className="relative">
          <div className="absolute group-hover:inset-0 blur-md bg-sky-500 rounded-full"></div>
          <IoStatsChart className="w-6 h-6" />
        </div>
        <p>20</p>
      </div>
      <div className="flex gap-4">
        <div className="flex group gap-1 hover:text-sky-500 relative">
          <div className="absolute group-hover:inset-0 blur-md bg-sky-500 rounded-full"></div>
          <FaRegBookmark className="w-6 h-6" />
        </div>
        <div className="flex group gap-1 hover:text-sky-500 relative">
          <div className="absolute group-hover:inset-0 blur-md bg-sky-500 rounded-full"></div>
          <IoShareOutline className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
