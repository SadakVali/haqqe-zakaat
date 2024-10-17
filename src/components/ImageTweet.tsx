import Image from "next/image";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function ImageTweet() {
  const session = await getServerSession(authOptions);

  return (
    <div className="rounded-xl aspect-video border border-zinc-800 relative">
      {!!session && !!session?.user?.image && (
        <Image
          alt="image post"
          src={session.user.image as string}
          layout="fill"
          objectFit="contain"
          quality={100}
        />
      )}
    </div>
  );
}
