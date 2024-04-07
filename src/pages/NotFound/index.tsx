import { Link } from "react-router-dom";
import Header from "../../Components/Header";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <div className="container mx-auto mt-10 max-w-[95%] rounded-md bg-red-400 bg-opacity-40 p-5 text-white">
        <h1 className="mb-8 text-4xl font-bold">404 - Page Not Found</h1>
        <p className="mb-6 text-lg">
          Oops! It seems like the page you are looking for doesn't exist.
        </p>
        <p className="mb-6 text-lg">
          Return to the{" "}
          <Link to="/app" className="underline">
            Movie Explorer app
          </Link>{" "}
          or go to the{" "}
          <Link to="/home" className="underline">
            home page
          </Link>
          .
        </p>
        <p className="mt-8 text-sm text-gray-400">
          If you believe this is an error, please contact support.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
