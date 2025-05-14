import { DUMMY_NEWS } from "@/dummy-news";
import React from "react";

export async function generateMetadata({ params }) {
  return {
    title: params.slug,
  };
}

function NewPageID({ params }) {
  const item = DUMMY_NEWS.find((item) => item.slug == params.slug);
  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${item.image}`} alt={item.title} />
        <h1>{item.title}</h1>
      </header>
      <p>News ID: {item.id}</p>
    </article>
  );
}

export default NewPageID;
