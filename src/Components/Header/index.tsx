import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import styles from "./index.module.css";

const Header = () => {
  return (
    <header className="border-b-2 border-b-purple-800 bg-[#070707] px-4 py-4">
      <div className="container z-10 mx-auto flex cursor-pointer items-center justify-between text-[#F7D4BC] ">
        <Logo />
        <nav className={styles.nav}>
          <ul className="flex gap-x-4 text-base sm:text-lg md:text-xl">
            <li>
              <NavLink className="transition-all duration-150" to="/home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/app">App</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
