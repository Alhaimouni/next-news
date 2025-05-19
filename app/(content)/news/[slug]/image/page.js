import { DUMMY_NEWS } from "@/dummy-news";

export default function ImagePreviewPage({ params }) {
  const slugItem = params.slug;
  const imgx = DUMMY_NEWS.find((item) =>
    slugItem === item.slug ? item : null
  ).image;
  return (
    <>
      <div>
        <img src={`/images/news/${imgx}`} alt="image" />
      </div>
    </>
  );
}
