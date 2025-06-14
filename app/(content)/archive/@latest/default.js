import NewsList from "@/components/news-list/news-list";
import { getLatestNews } from "@/lib/news";

function DeafultPageLatest() {
  const latestNews = getLatestNews();

  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}

export default DeafultPageLatest;
