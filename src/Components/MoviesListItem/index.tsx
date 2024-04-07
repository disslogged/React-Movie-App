import { Link } from "react-router-dom";
import { MovieType } from "../../types/MovieTypes";

type MovieListItemType = {
  movie: MovieType;
};

const MovieListItem = ({ movie }: MovieListItemType) => {
  return (
    <Link
      to={movie.id}
      className="flex w-full shrink  flex-col items-center rounded-md text-purple-200 transition-all
      duration-200
      hover:-translate-y-2 hover:bg-orange-300 hover:font-bold
      hover:text-purple-600
      "
    >
      <h2 className="mb-3 p-1 text-left text-lg font-bold underline">
        {movie.title}
      </h2>

      <div className="relative h-[400px] w-full overflow-hidden rounded-md">
        <span className="absolute right-3 top-2 inline-block rounded-md bg-purple-300 bg-opacity-70 px-2 py-1 font-lemon text-base text-purple-800">
          {movie.year}
        </span>
        <img
          src={movie.poster}
          alt="movie poster"
          className="h-full block w-full object-contain"
        />
      </div>
    </Link>
  );
};

export default MovieListItem;
