import { DUMMY_NEWS } from "@/dummy-news";

export default function ImagePreviewPageDeep({ params }) {
  const slugItem = params.slug;
  const imgx = DUMMY_NEWS.find((item) =>
    slugItem === item.slug ? item : null
  ).image;
  return (
    <>
      <h1>This is intercepted route</h1>
      <div>
        <img src={`/images/news/${imgx}`} alt="image" />
      </div>
    </>
  );
}
