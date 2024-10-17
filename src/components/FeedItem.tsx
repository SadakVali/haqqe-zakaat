import React from "react";
import ProfilePicture from "./ProfilePicture";
import { BsThreeDots } from "react-icons/bs";
import ImageTweet from "./ImageTweet";
import TweetStats from "./TweetStats";

export default function FeedItem() {
  return (
    <div className="flex p-4 gap-2 border-b-[1px] border-zinc-800">
      <ProfilePicture />
      <div className="flex-grow text-base flex flex-col gap-4">
        <div>
          <div className="flex justify-between">
            <div className="text-left flex gap-4">
              <p className="font-bold">Sadiq Vali</p>
              <p className="text-gray-500">@rebirth4vali</p>
              <p className="text-gray-500">-</p>
              <p className="text-gray-500">1 hr ago</p>
            </div>
            <BsThreeDots />
          </div>
          <p>How do Projects Like this make you feel?</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sky-500">#100xdevs #NextJS #Cohort3 #MERN</p>
          <ImageTweet />
        </div>
        <TweetStats />
      </div>
    </div>
  );
}
