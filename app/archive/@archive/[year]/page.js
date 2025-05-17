import NewsList from "@/components/news-list/news-list";
import { DUMMY_NEWS } from "@/dummy-news";

function YearPage({ params }) {
  const news = DUMMY_NEWS.filter((currentNew) => {
    if (currentNew.date.startsWith(params.year)) {
      return currentNew;
    }
  });

  return <NewsList news={news} />;
}

export default YearPage;
