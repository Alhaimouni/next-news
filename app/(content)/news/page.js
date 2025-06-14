import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news-list/news-list";


export const metadata = {
  title: "News",
  description: "Know more about the world news.",
};

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}
