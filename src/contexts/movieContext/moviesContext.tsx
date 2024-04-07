import { createContext } from "react";
import { MovieType } from "../../types/MovieTypes";

export type MoviesContextValueType = MoviesState & {
  changeQuery: (query: string) => void;
};
export type MoviesState = {
  movies: MovieType[];
  loading: boolean;
  error: { hasError: boolean; errorMessage?: string };
  query: string;
};

const moviesContext = createContext<MoviesContextValueType>({
  error: { hasError: false },
  loading: false,
  movies: [],
  query: "inception",
  changeQuery: () => {},
});

export default moviesContext;
