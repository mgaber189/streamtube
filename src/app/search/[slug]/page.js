import MovieContainer from "@/components/MovieContainer";
import React from "react";

async function Search({ params }) {
  const { slug } = await params;
  console.log(slug);
  return <MovieContainer search={slug} title={slug} isVertical />;
}

export default Search;
