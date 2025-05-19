import NewsList from "@/components/news-list/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function ArchivePage({ params }) {
  let news;
  let links = getAvailableNewsYears();
  const filter = params.filter;
  const year = filter?.[0];
  const month = filter?.[1];
  console.log(year, month);

  if (filter && filter.length > 2) {
    throw new Error("Error in filters")
  }

  if (year && !month) {
    news = getNewsForYear(year);
    links = getAvailableNewsMonths(year);
  }

  if (year && month) {
    news = getNewsForYearAndMonth(year, month);
    links = [];
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((item) => {
              const href = year
                ? `/archive/${year}/${item}`
                : `/archive/${item}`;
              return (
                <li key={item}>
                  <Link href={href}>{item}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {!news && <p>Select Time to show</p>}
      {news && <NewsList news={news} />}
    </>
  );
}
