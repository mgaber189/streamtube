import { getImagePath } from "@/lib/Fetcher";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function MovieCard({ movies, vertical }) {
  return (
    <Link href={`/movie/${movies?.id}`}>
      <div className="relative flex-shrink-0 cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover:drop-shadow-lg rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-gray-950 dark:to-[#1A1C29]/80 z-10">
          <p className="absolute z-20 bottom-5 left-5 text-xl text-white">
            {" "}
            {movies?.title}
          </p>
        </div>
        <Image
          src={getImagePath(movies?.backdrop_path || movies?.poster_path)}
          alt={movies?.title}
          width={1920}
          height={1080}
          className="w-fit min-w-[400px] h-56 object-cover shadow-md shadow-gray-900 drop-shadow-xl"
        />
      </div>
    </Link>
  );
}

export default MovieCard;
