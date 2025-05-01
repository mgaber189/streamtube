export const fetcher = async (link, body) => {
  const url = new URL(`https://api.themoviedb.org/3/${link}`);

  // Using forEach instead of map
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
      revalidate: false,
    },
  };

  try {
    const response = await fetch(url.toString(), options);
    
    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    // Log the error or handle it as needed
    console.error("Fetcher Error:", error.message);
    throw new Error("An error occurred while fetching data."); // Re-throw the error
  }
};


export const getImagePath = (imagePath, fullSize) => {
    return imagePath
      ? `http://image.tmdb.org/t/p/${fullSize ? "original" : "w500"}/${imagePath}`
      : "https://i.ibb.co/vVvBpzZ/360-F-482375378-9q1-OVUTCIKY029-UGNh-W0vb-OG6b-Nu-K3-SX.jpg";
  };