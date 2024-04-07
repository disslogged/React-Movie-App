import { ReactNode } from "react";

export type MovieType = {
  id: string;
  title: string;
  year: string;
  imdbRating: string;
  poster: string;
};

export type MovieResponseType = {
  imdbID: string;
  Title: string;
  Year: string;
  imdbRating: string;
  Poster: string;
};

export type FullMovieResponseType = MovieResponseType & {
  Runtime: string;
  Genre: string;
  Director: string;
  Plot: string;
  Country: "United States, United Kingdom";
  imdbRating: "8.8";
};

export type FullMovieType = MovieType & {
  runtime: string;
  genre: string;
  director: string;
  plot: string;
  country: "United States, United Kingdom";
  imdbRating: "8.8";
};

// Context Provider type
export type MoviesProviderType = {
  children: ReactNode;
};

// Action Types
export type LoadingType = {
  type: "movies/loading";
  payload: { loading: boolean };
};

export type ErrorType = {
  type: "movies/error";
  payload: { hasError: boolean; errorMessage?: string };
};

export type ChangeQueryType = {
  type: "movies/changeQuery";
  payload: { query: string };
};

export type UpdateMovies = {
  type: "movies/update";
  payload: { movies: MovieType[] };
};

export type ActionTypes =
  | ChangeQueryType
  | LoadingType
  | ErrorType
  | UpdateMovies;
