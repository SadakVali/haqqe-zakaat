import React from "react";
import ProfilePicture from "./ProfilePicture";
import TweetButton from "./TweetButton";

export default function NewTweet() {
  return (
    <div className="border-y-[1px] border-zinc-800 px-4 py-8 flex gap-4">
      <ProfilePicture className="-mt-2" />
      <div className="flex-grow">
        <textarea
          placeholder="What is Happenning?"
          className="bg-transparent w-full no-underline resize-none outline-none overflow-hidden"
        />
        <div className="flex justify-end">
          <TweetButton className="px-8 py-3" />
        </div>
      </div>
    </div>
  );
}
