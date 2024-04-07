import useMoviesContext from "../../hooks/useMoviesContext";
import MovieListItem from "../MoviesListItem";

import Loader from "../../assets/loader.svg";

const MoviesList = () => {
  const { movies, error, loading } = useMoviesContext();

  return (
    <>
      {!error.hasError && loading && (
        <img
          src={Loader}
          alt="loader"
          className="absolute left-[50%]  block -translate-x-[50%]"
        />
      )}

      {!error.hasError &&
        !loading &&
        movies.map(movie => <MovieListItem movie={movie} key={movie.id} />)}

      {error.hasError && !loading && movies.length !== 0 && (
        <p className="absolute left-[50%] -translate-x-[50%] border-b-2 border-red-500 pb-2 text-2xl text-orange-200">
          {error.errorMessage}
        </p>
      )}

      {!loading && !error.hasError && movies.length === 0 && (
        <p className="absolute left-[50%] -translate-x-[50%] border-b-2 border-cyan-500 pb-2 text-2xl text-cyan-200">
          please search to find movies ...
        </p>
      )}
    </>
  );
};

export default MoviesList;
