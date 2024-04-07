import { useContext } from "react";
import moviesContext from "../contexts/movieContext/moviesContext";

const useMoviesContext = () => {
  const ctx = useContext(moviesContext);
  if (ctx === undefined) throw new Error("using context outside the provider");

  return ctx;
};

export default useMoviesContext;
