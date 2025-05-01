import React from "react";
import MovieCard from "./MovieCard";
import { fetcher } from "@/lib/Fetcher";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function MovieContainer({
  title,
  isVertical,
  typeId,
  typeName,
  search
}) {
  const page = 1;
  let endpoint = "";
  const queryParams = [];

  if (title === "Now Playing") {
    endpoint = "movie/now_playing";
  } else if (title === "Up Coming") {
    endpoint = "movie/upcoming";
  } else if (title === "Top Rated") {
    endpoint = "movie/top_rated";
  } else if (title === "Popular") {
    endpoint = "movie/popular";
  } else if (title?.includes("type")) {
    endpoint = "discover/movie";
    queryParams.push({ name: "with_genres", value: typeId });
  } else if (search) {
    endpoint = "search/movi";
    queryParams.push({ name: "query", value: search });
  }

  queryParams.push({ name: "page", value: page });

  let data = null;

  try {
    if (endpoint) {
      data = await fetcher(endpoint, queryParams);
    }
  } catch (error) {
      throw new Error("An error occurred while fetching movie data.");
  }

  if (!data || !data.results || data.results.length === 0) {
    return (
      notFound()
    );
  }

  return (
    <div className="p-5">
      {isVertical && (
        <h2 className="text-4xl font-bold mb-5">
          Results for {typeName ? typeName : title?.replace("-", " ")}
        </h2>
      )}
      <div className="relative flex items-center justify-between pb-5 border-b border-b-gray-600 mb-5">
        <p className="text-xl font-medium uppercase">
          {isVertical ? "Movies" : title}
        </p>
        {!title?.includes("type") && (
          <Link
            href={{ pathname: `/movies/viewmore/${title?.replace(/\s+/g, "-")}` }}
            className="bg-gray-800 text-sm text-white uppercase px-5 py-3 rounded-md border-indigo-600 font-semibold hover:bg-black duration-300"
          >
            View more
          </Link>
        )}
        <div className="w-16 h-1 bg-red-600 inline-block absolute left-0 -bottom-[1.5px] z-10"></div>
      </div>

      {isVertical ? (
        <div className="flex flex-col max-h-full items-center lg:items-start justify-between gap-10">
          {data.results.map((movie) => (
            <div
              className="flex flex-col lg:flex-row items-center gap-5 w-11/12 2xl:w-7/12"
              key={movie.id}
            >
              <MovieCard movies={movie} />
              <div className="flex flex-col">
                <div className="relative border-b border-b-gray-600 mb-5 w-full">
                  <p className="text-xl font-medium uppercase">
                    {`${movie.title} (${movie.release_date?.split("-")[0]})`}
                  </p>
                </div>
                <div>{movie.overview}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex max-h-full items-center justify-between gap-10 overflow-x-scroll no-scrollbar">
          {data.results.map((movie) => (
            <MovieCard movies={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}
