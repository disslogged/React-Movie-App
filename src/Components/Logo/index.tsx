import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <h1 className="font-rubick text-sm xs:text-lg sm:text-2xl text-[#D7BCE8] hover:scale-125 shadow-md transition-all duration-200">
        Movie-F
      </h1>
    </Link>
  );
};

export default Logo;
