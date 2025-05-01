export const fetcher = async (link, body) => {
  const url = new URL(`https://api.themoviedb.org/3/${link}`);

  // Better to use forEach instead of map
  body?.forEach((e) => {
    url.searchParams.set(e.name, e.value);
  });

  url.searchParams.set("include_adult", "false");
  url.searchParams.set("include_video", "false");
  url.searchParams.set("sort_by", "popularity.desc");
  url.searchParams.set("language", "en-US");

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
    next: {
      revalidate: 0,
    },
  };

  const response = await fetch(url.toString(), options);
  const data = await response.json();
  return data;
};

export const getImagePath = (imagePath, fullSize) => {
    return imagePath
      ? `http://image.tmdb.org/t/p/${fullSize ? "original" : "w500"}/${imagePath}`
      : "https://i.ibb.co/vVvBpzZ/360-F-482375378-9q1-OVUTCIKY029-UGNh-W0vb-OG6b-Nu-K3-SX.jpg";
  };