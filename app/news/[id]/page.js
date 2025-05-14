import React from "react";

export async function generateMetadata({ params }) {
  return {
    title: params.id,
  };
}

function NewPageID({ params }) {
  return <div>NewPageID {params.id}</div>;
}

export default NewPageID;
