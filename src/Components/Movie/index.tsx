import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoIosCloseCircle } from "react-icons/io";
import { MdGrade, MdAccessTime, MdPublic, MdClass } from "react-icons/md";
import { BsPersonVideo3 } from "react-icons/bs";
import loader from "../../assets/loader.svg";
import { IoArrowBack } from "react-icons/io5";
import { fetchMovie } from "../../utils/fetchMovie";
import { FullMovieType } from "../../types/MovieTypes";

const Movie = () => {
  const [movie, setMovie] = useState<FullMovieType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async function () {
      setLoading(true);
      try {
        const fetchedMovie = await fetchMovie(movieId);
        if (fetchedMovie)
          setMovie({
            id: fetchedMovie.imdbID,
            title: fetchedMovie.Title,
            year: fetchedMovie.Year,
            poster: fetchedMovie.Poster,
            imdbRating: fetchedMovie.imdbRating,
            plot: fetchedMovie.Plot,
            genre: fetchedMovie.Genre,
            runtime: fetchedMovie.Runtime,
            country: fetchedMovie.Country,
            director: fetchedMovie.Director,
          });
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        }
      }
      setLoading(false);
    };

    if (movieId) {
      fetchData();
    }
  }, [movieId]);

  // rendered content
  let content;
  if (loading)
    content = (
      <img
        src={loader}
        alt="loader"
        className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]"
      />
    );

  if (!loading)
    content = (
      <>
        <h1 className="mb-4 text-2xl font-bold text-orange-300">
          {movie?.title}
        </h1>
        <div className="sm:flex sm:items-start sm:justify-around sm:gap-4">
          <div className="relative h-[400px] max-w-full overflow-hidden  rounded-md ">
            <span className="absolute right-3 top-2 inline-block rounded-md bg-purple-300 bg-opacity-70 px-2 py-1 font-lemon text-base text-purple-800">
              {movie?.year}
            </span>
            <img
              src={movie?.poster}
              alt="movie poster"
              className="mb-2 block w-full rounded-md object-contain"
            />
          </div>
          <div className="basis-[100%]">
            <div className="my-2 flex items-center justify-between sm:flex-col sm:items-start sm:gap-2">
              <div className="flex items-center gap-2 text-yellow-400">
                <MdGrade />
                <p>{movie?.imdbRating}</p>
              </div>
              <div className="flex items-center gap-2 text-green-300">
                <MdAccessTime />
                <p>{movie?.runtime}</p>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2 text-blue-300">
                <MdPublic />
                <p>{movie?.country}</p>
              </div>
              <div className="flex items-center gap-2 text-blue-300">
                <MdClass />
                <p>{movie?.genre}</p>
              </div>
              <div className="flex items-center gap-2 text-blue-300">
                <BsPersonVideo3 />
                <p className="text-left">{movie?.director}</p>
              </div>
            </div>
            <p className="mt-5 w-full text-justify text-gray-100 sm:mt-2">
              {movie?.plot}
            </p>
          </div>
        </div>
        <Link
          to="/app"
          className="transition-color flex items-center justify-center text-center text-2xl text-blue-300 duration-150 hover:text-blue-700 mt-10"
        >
          <IoArrowBack /> back
        </Link>
      </>
    );

  return (
    <div className="relative overflow-scroll max-h-[80vh] min-h-[80vh] md:max-h-[initial] md:min-h-[70vh] rounded-md border border-purple-400 bg-purple-400 bg-opacity-40 px-2 py-1">
      <Link to="/app">
        <IoIosCloseCircle className="absolute left-2 top-1 z-50 font-bold text-red-500 text-4xl" />
      </Link>
      {content}
    </div>
  );
};

export default Movie;
