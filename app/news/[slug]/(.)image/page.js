"use client";
import { DUMMY_NEWS } from "@/dummy-news";
import { useRouter } from "next/navigation";

export default function ImagePreviewPageDeep({ params }) {
  const router = useRouter();
  const slugItem = params.slug;
  const imgx = DUMMY_NEWS.find((item) =>
    slugItem === item.slug ? item : null
  ).image;
  return (
    <>
      <div
        className="modal-backdrop"
        onClick={() => {
          router.back();
        }}
      >
        <dialog className="modal" open>
          <div className="fullscreen-image">
            <img src={`/images/news/${imgx}`} alt="image" className="img" />
          </div>
        </dialog>
      </div>
    </>
  );
}
