import { DUMMY_NEWS } from "@/dummy-news";
import React from "react";

function ImagePreviewPage({ params }) {
  const slugItem = params.slug;
  const imgx = DUMMY_NEWS.find((item) => slugItem === item.slug ?  item :null).image;
  return (
    <>
      <img src={`/images/news/${imgx}`} alt="image" />
    </>
  );
}

export default ImagePreviewPage;
