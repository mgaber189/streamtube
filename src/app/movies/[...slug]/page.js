// app/[slug]/page.js
import MovieContainer from "@/components/MovieContainer";
import React from "react";

export default async function Movies({ params }) {
  const { slug } = await params;
  return (
    <MovieContainer
      title={slug[1].replace("-", " ")}
      isVertical={true}
      typeId={slug[0]}
      typeName={slug[2]}
    />
  );
}
