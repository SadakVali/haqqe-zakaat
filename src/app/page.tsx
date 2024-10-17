import FeedStatusBar from "@/components/FeedStatusBar";
import NewTweet from "@/components/NewTweet";
import FeedItem from "@/components/FeedItem";

export default async function Home() {
  return (
    <main className="flex-grow border-x-[1px] border-zinc-800 py-16">
      <FeedStatusBar />
      <NewTweet />
      <div className="flex flex-col">
        {Array.from({ length: 5 }).map((_, key) => (
          <FeedItem key={key} />
        ))}
      </div>
    </main>
  );
}
