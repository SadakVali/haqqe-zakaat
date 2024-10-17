"use client";

import { BsThreeDots } from "react-icons/bs";
import ProfilePicture from "./ProfilePicture";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

export default function RightSidebar() {
  const [inputText, setInputText] = useState("");

  return (
    <section className="flex flex-col gap-4 px-4 py-16 max-h-screen sticky top-0">
      <label
        htmlFor="search-input"
        className="relative flex justify-center items-center bg-zinc-800 rounded-full py-3 pl-4 focus-within:ring-1 focus-within:ring-primary group"
      >
        <FaSearch className="text-gray-500 group-focus-within:text-primary text-xl" />
        <input
          id="search-input"
          type="text"
          placeholder="Search"
          className="rounded-full placeholder:text-base bg-transparent outline-none border-none px-4 text-xl"
          onChange={(e) => setInputText(e.target.value)}
        />
        {!!inputText && (
          <div className="bg-primary rounded-full absolute right-4 cursor-pointer">
            <RxCross2 className="text-zinc-800" />
          </div>
        )}
      </label>

      <div className="border border-zinc-800 rounded-2xl flex flex-col">
        <h2 className="font-bold p-4">{`What's Happening?`}</h2>
        {Array.from({ length: 3 }).map((_, key) => (
          <div className="flex flex-col hover:bg-gray-500/5 p-4" key={key}>
            <div className="flex justify-between">
              <div className="flex text-zinc-800 text-base gap-1">
                <div>Sports Trending</div>
                <div>-</div>
                <div>Trending</div>
              </div>
              <BsThreeDots className="text-gray-500" />
            </div>
            <div className="flex flex-col">
              <p className="text-lg">Smriti Mandaana</p>
              <p className="text-gray-500 text-base">1,994 posts</p>
            </div>
          </div>
        ))}
        <p className="text-primary text-lg hover:bg-gray-500/5 p-4">
          Show More
        </p>
      </div>

      <div className="border border-zinc-800 rounded-2xl flex flex-col">
        <h2 className="font-bold p-4">Who to follow?</h2>
        {Array.from({ length: 3 }).map((_, key) => (
          <div
            className="flex hover:bg-gray-500/5 p-4 gap-2 justify-center items-center"
            key={key}
          >
            <ProfilePicture />
            <div className="flex justify-between flex-grow">
              <div className="flex flex-col text-base">
                <div className="text-lg">Harkirat Singh</div>
                <div className="text-gray-500">@kirat</div>
              </div>
              <button className="bg-white px-3 py-1 self-center rounded-full text-lg text-gray-800 font-bold">
                Follow
              </button>
            </div>
          </div>
        ))}
        <p className="text-primary text-lg hover:bg-gray-500/5 p-4">
          Show More
        </p>
      </div>
    </section>
  );
}
