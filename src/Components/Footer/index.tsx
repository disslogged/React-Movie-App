import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-8 rounded-md py-4 text-white">
      <div className="mx-auto text-center sm:text-left">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Movie Explorer. All rights reserved.
          | Contact:{" "}
          <a href="mailto:disslogged@gmail.com" className="underline">
            disslogged@gmail.com
          </a>
        </p>
        <p className="mt-2 text-sm">
          <Link to="/privacy" className="underline">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link to="/terms" className="underline">
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
