export async function getAllMovies() {
  try {
    let response = await fetch(`${process.env.REACT_APP_BE_URL}/medias`, {
      method: "GET",
    });
    if (response.ok) {
      let data = await response.json();
      return data;
    } else {
      let error = await response.json();
      return error;
    }
  } catch (error) {
    return error;
  }
}

// "/:mediaId" GET MEDIA BY ID FROM OMDB USING IMDBID
export async function getMoviesByImdbId(imdbId) {
  try {
    let response = await fetch(
      `${process.env.REACT_APP_BE_URL}/medias/${imdbId}`,
      {
        method: "GET",
      }
    );
    if (response.ok) {
      let data = await response.json();
      return data;
    } else {
      let error = await response.json();
      return error;
    }
  } catch (error) {
    console.log(error);
  }
}

// "/search?query=whatever" given a title in the query search in omdb catalogue by title
export async function getMoviesByTitle(query) {
  try {
    let response = await fetch(
      `${process.env.REACT_APP_BE_URL}/medias/search/query?query=${query}`,
      {
        method: "GET",
      }
    );
    if (response.ok) {
      let data = await response.json();
      return data;
    } else {
      let error = await response.json();
      return error;
    }
  } catch (error) {
    console.log(error);
  }
}
