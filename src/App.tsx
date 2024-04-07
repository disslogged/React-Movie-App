import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import MovieApp from "./pages/MovieApp";
import MoviesProvider from "./contexts/movieContext/MoviesProvider";
import Movie from "./Components/Movie";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/app"
          element={
            <MoviesProvider>
              <MovieApp />
            </MoviesProvider>
          }
        >
          <Route path=":movieId" element={<Movie />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
