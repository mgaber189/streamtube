"use client";

import React from "react";
import YouTube from "react-youtube";

const YoutubeVideos = ({ movieVideos }) => {
  const opts = {
    height: "300px",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div>

        <h2 className="text-xl font-bold mb-5">Offical videos from Youtube:</h2>
    <div className="flex flex-wrap justify-center lg:!justify-center 2xl:justify-start gap-2 w-full">
      {movieVideos?.results?.map((video) => (
        <div
          key={video?.id}
          className="w-full sm:w-11/12 lg:w-2/5 xl:w-lg px-2"
        >
          <YouTube videoId={video?.key} opts={opts} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default YoutubeVideos;
