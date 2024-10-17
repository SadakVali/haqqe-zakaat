import Link from "next/link";
import { BiHomeCircle } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import {
  FaBell,
  FaEnvelope,
  FaRegBookmark,
  FaRegUser,
  FaTwitter,
} from "react-icons/fa";
import { HiHashtag } from "react-icons/hi";
import ProfilePicture from "./ProfilePicture";
import TweetButton from "./TweetButton";

const NAVIGATION_ITEMS = [
  {
    title: "Home",
    icon: BiHomeCircle,
  },
  {
    title: "Explore",
    icon: HiHashtag,
  },
  {
    title: "Notifications",
    icon: FaBell,
  },
  {
    title: "Messages",
    icon: FaEnvelope,
  },
  {
    title: "Bookmarks",
    icon: FaRegBookmark,
  },
  {
    title: "Profile",
    icon: FaRegUser,
  },
];

export default function LeftSidebar() {
  return (
    <section className="flex flex-col px-4 py-16 justify-between sticky top-0 max-h-screen">
      <div className="flex flex-col">
        <Link href={"/"} className="p-4">
          <FaTwitter className="w-12 h-12" />
        </Link>
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            href={`${
              item.title !== NAVIGATION_ITEMS[0].title
                ? item.title.toLowerCase()
                : "/"
            }`}
            key={item.title}
            className="flex items-center justify-start gap-4 transition duration-200 hover:bg-zinc-900 rounded-full p-4"
          >
            <item.icon className="w-8 h-8" />
            <p>{item.title}</p>
          </Link>
        ))}
        <TweetButton />
      </div>
      <button className="flex items-center justify-between gap-20 transition duration-200 hover:bg-zinc-900 rounded-full p-4">
        <div className="flex gap-2 items-center justify-center">
          <ProfilePicture />
          <div className="text-base text-left">
            <p className="font-bold">Sadiq Vali</p>
            <p className="text-gray-500">@rebirth4vali</p>
          </div>
        </div>
        <BsThreeDots />
      </button>
    </section>
  );
}
