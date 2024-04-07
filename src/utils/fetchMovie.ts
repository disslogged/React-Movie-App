import { FullMovieResponseType } from "../types/MovieTypes";

export const fetchMovie = async (id: string | undefined) => {
  try {
    const res = await fetch(
      `https://omdbapi.com/?i=${id}&plot=full&apikey=8d329298&`
    );

    if (!res.ok) throw new Error("please try again");

    const fetchedMovie: FullMovieResponseType = await res.json();
    return fetchedMovie;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return null;
    }
  }
};
