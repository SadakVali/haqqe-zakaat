import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";

type ProfilePictureTypes = {
  className?: string;
};

export default async function ProfilePicture({
  className = "",
}: ProfilePictureTypes) {
  const session = await getServerSession(authOptions);

  if (!!session)
    return (
      <div className={`rounded-full w-11 h-11 overflow-hidden ${className}`}>
        <Image src={session.user.image} alt="profile" width="44" height="44" />
      </div>
    );
  return <div className={`rounded-full w-11 h-11 bg-gray-500 ${className}`} />;
}
