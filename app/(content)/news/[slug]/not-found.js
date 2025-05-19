"use client";
import { useParams } from "next/navigation";

function ali() {
  const params = useParams();
  return (
    <div id="error">
      <p>No News with the following name: {params.slug}</p>
    </div>
  );
}

export default ali;
