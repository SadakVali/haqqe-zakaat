import React from "react";

export default function TweetButton({
  className = "",
}: {
  className?: string;
}) {
  return (
    <button
      className={`bg-sadiq font-bold p-4 rounded-full mt-6 transition duration-200 hover:bg-opacity-90 text-xl ${className}`}
    >
      Tweet
    </button>
  );
}
