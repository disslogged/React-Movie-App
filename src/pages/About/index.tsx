import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <div className="container mx-auto mt-10 max-w-[95%] rounded-md bg-purple-400 bg-opacity-40 px-2 py-4 text-white">
        <h1 className="mb-8 text-4xl font-bold">About Movie Explorer</h1>
        <p className="mb-6 text-lg">
          Welcome to Movie Explorer, your go-to destination for exploring a vast
          collection of IMDb movies. Whether you're a movie enthusiast or just
          looking for information on your favorite films, we've got you covered!
        </p>
        <p className="mb-6 text-lg">With Movie Explorer, you can:</p>
        <ul className="ml-6 list-disc">
          <li>Search for any IMDb movie using our intuitive search feature.</li>
          <li>
            Access detailed information about each movie, including plot
            summaries, release years, genres, and more.
          </li>
          <li>
            Discover ratings and runtime information, helping you make informed
            decisions about what to watch.
          </li>
          <li>
            Explore movies from various countries and learn about their
            directors and creators.
          </li>
        </ul>
        <p className="mt-6 text-lg">
          Ready to start your movie exploration journey? Head over to our{" "}
          <Link to="/app" className="underline">
            Movie Explorer app
          </Link>{" "}
          now!
        </p>
        <p className="mt-8 text-sm text-gray-400">
          Movie Explorer is powered by the Open Movie Database (OMDb) API. All
          movie information is provided by OMDb.
        </p>
        <Footer />
      </div>
    </div>
  );
};

export default About;
