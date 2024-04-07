import { useEffect, useReducer } from "react";
import moviesContext, {
  MoviesContextValueType,
  MoviesState,
} from "./moviesContext";

import {
  ActionTypes,
  MovieResponseType,
  MovieType,
  MoviesProviderType,
} from "../../types/MovieTypes";

// reducer fn
const moviesReducer = (
  state: MoviesState,
  action: ActionTypes
): MoviesState => {
  switch (action.type) {
    case "movies/loading": {
      return { ...state, loading: action.payload.loading };
    }
    case "movies/error": {
      return {
        ...state,
        error: {
          hasError: action.payload.hasError,
          errorMessage: action.payload.errorMessage,
        },
      };
    }
    case "movies/update": {
      return { ...state, movies: action.payload.movies };
    }

    case "movies/changeQuery": {
      return { ...state, query: action.payload.query };
    }
  }
};

// init state
const initMoviesState = {
  movies: [],
  loading: false,
  error: { hasError: false },
  query: "inc",
};

const MoviesProvider = ({ children }: MoviesProviderType) => {
  const [moviesState, dispatchMovies] = useReducer(
    moviesReducer,
    initMoviesState
  );

  useEffect(() => {
    const controller = new AbortController();

    const fetchMovies = async function () {
      dispatchMovies({ type: "movies/loading", payload: { loading: true } });
      dispatchMovies({ type: "movies/error", payload: { hasError: false } });
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?s=${moviesState.query}&apikey=8d329298&`,
          { signal: controller.signal }
        );

        const receivedMovies = await res.json();

        if (receivedMovies.Response === "False") {
          throw new Error("Movies not found");
        }

        const formattedMovies: MovieType[] = receivedMovies.Search.map(
          (receiveMovie: MovieResponseType) => {
            return {
              id: receiveMovie.imdbID,
              title: receiveMovie.Title,
              year: receiveMovie.Year,
              imdbRating: receiveMovie.imdbRating,
              poster: receiveMovie.Poster,
            };
          }
        );
        dispatchMovies({
          type: "movies/update",
          payload: { movies: formattedMovies },
        });
      } catch (error) {
        if (error instanceof Error && error.name !== "AbortError") {
          dispatchMovies({
            type: "movies/error",
            payload: { hasError: true, errorMessage: error.message },
          });
        }
      } finally {
        dispatchMovies({
          type: "movies/loading",
          payload: { loading: false },
        });
      }
    };

    if (moviesState.query.length > 2) fetchMovies();
    if (moviesState.query.length < 3)
      dispatchMovies({ type: "movies/update", payload: { movies: [] } });

    return () => {
      controller.abort();
    };
  }, [moviesState.query]);

  const ctxValue: MoviesContextValueType = {
    ...moviesState,
    changeQuery: query => {
      dispatchMovies({ type: "movies/changeQuery", payload: { query } });
    },
  };

  return (
    <moviesContext.Provider value={ctxValue}>{children}</moviesContext.Provider>
  );
};

export default MoviesProvider;
