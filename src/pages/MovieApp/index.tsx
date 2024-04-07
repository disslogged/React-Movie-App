import { Outlet, useParams } from "react-router-dom";
import Header from "../../Components/Header";
import MoviesList from "../../Components/MoviesList";
import SearchInput from "../../Components/SearchInput";
import styles from "./index.module.css";

const MovieApp = () => {
  const params = useParams();

  return (
    <section className={styles.movieApp}>
      <Header />
      <SearchInput />
      <div className={`${styles.movieAppLayout} ${params.movieId && "hidden"}`}>
        <MoviesList />
      </div>
      {params.movieId && (
        <div className="container mx-auto h-full">
          <Outlet />
        </div>
      )}
    </section>
  );
};

export default MovieApp;
