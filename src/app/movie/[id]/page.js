import MovieCard from "@/components/MovieCard";
import YoutubeVideos from "@/components/YoutubeVideos";
import { fetcher, getImagePath } from "@/lib/Fetcher";
import Image from "next/image";
import React from "react";

async function movie({ params }) {
  const { id } = params;
  const movie = await fetcher(`movie/${id}`);
  const movieVideos = await fetcher(`movie/${id}/videos`);


  return (
    <div className="flex flex-col items-center justify-center p-10 gap-10">
      <div
        className="flex items-center flex-col lg:flex-row gap-5 w-full justify-center"
        key={movie?.id}>
        <div className="relative w-11/12 lg:w-7/12 transform hover:scale-105 transition duration-200 ease-out hover:drop-shadow-lg rounded-md overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-gray-950 dark:to-[#1A1C29]/80 z-10">
            <p className="absolute z-20 bottom-5 left-5 text-xl text-white">
              {movie?.title}
            </p>
          </div>
          <Image
            src={getImagePath(movie?.backdrop_path || movie?.poster_path)}
            alt={movie?.title}
            width={1920}
            height={1080}
            className="w-full h-auto object-cover shadow-md shadow-gray-900 drop-shadow-xl"
          />
        </div>
        <div className="flex flex-col w-11/12 lg:w-6/12">
          <div className="relative border-b border-b-gray-600 mb-5 w-full">
            <p className="text-xl font-medium uppercase">
              {`${movie?.title} (${movie?.release_date?.split("-")[0]})`}
            </p>
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="text-sm leading-6 tracking-wide mt-2">
              {movie?.overview}
            </p>
            <p className="text-gray-200 text-sm">
              IMDB:{" "}
              <span className="text-white font-medium">
                {movie.vote_average}
              </span>
            </p>
            <p className="text-gray-200 text-sm">
              Votes:{" "}
              <span className="text-white font-medium">{movie.vote_count}</span>
            </p>
            <p className="text-gray-200 text-sm">
              Release Date:{" "}
              <span className="text-white font-medium">
                {movie.release_date}
              </span>
            </p>
            <p className="text-gray-200 text-sm">
              Genres:{" "}
              {movie?.genres.map((item) => (
                <span key={item?.id} className="text-white font-medium mr-1">
                  {item?.name},
                </span>
              ))}
            </p>
            <p className="text-gray-200 text-sm">
              Tag Line:{" "}
              <span className="text-white font-medium">{movie.tagline}</span>
            </p>
            <p className="text-gray-200 text-sm">
              Status:{" "}
              <span
                className={`font-medium ${
                  movie?.status === "Released"
                    ? "text-green-500"
                    : "text-red-500"
                }`}>
                {movie.status}
              </span>
            </p>
          </div>
        </div>
      </div>
    <YoutubeVideos movieVideos ={movieVideos}/>

    </div>
  );
}

export default movie;
