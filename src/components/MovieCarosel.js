"use client";
import { getImagePath } from "@/lib/Fetcher";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import React from "react";

function MovieCarosel({ movie }) {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  return (
    <div className="embla relative top-0" ref={emblaRef}>
      <div className="embla__container">
        {movie?.results?.map((e) => {
          return (
            <div className="embla__slide relative" key={e.id}>
              <Image
                src={getImagePath(e?.backdrop_path, true)}
                alt={e?.title}
                width={1920}
                height={1080}
              />
              <div className="hidden lg:inline absolute top-0 pt-40 xl:pt-72 left-0 bg-transparent z-20 h-full w-full bg-gradient-to-r from-gray-900/90 via-transparent to-transparent p-10 space-y-5 text-white">
                <h2 className="text-5xl font-bold max-w-xl">{e?.title}</h2>
                <p className="max-w-xl line-clamp-3">{e?.overview}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute top-0 left-0 inset-0 bg-gradient-to-b from-gray-900/10 via-gray-900/30 to-gray-950 dark:to-[#121212]" />
    </div>
  );
}

export default MovieCarosel;
