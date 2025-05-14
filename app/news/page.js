import Link from "next/link";

export const metadata = {
  title: "News",
  description: "Know more about the world news.",
};

export default function NewsPage() {
  return (
    <>
      <ul>
        <li>
          <Link href={"/news/1"}>one</Link>
        </li>
        <li>
          <Link href={"/news/2"}>two</Link>
        </li>
        <li>
          <Link href={"/news/3"}>three</Link>
        </li>
      </ul>
    </>
  );
}
