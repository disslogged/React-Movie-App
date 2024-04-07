import { TypeAnimation } from "react-type-animation";
import Header from "../../Components/Header";
import HomeBG from "./HomeBG";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="h-screen relative w-dvw grid grid-rows-[auto_1fr] overflow-hidden">
      <Header />
      <HomeBG />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 md:w-2/3 mx-auto text-center">
        {/* <div className="absolute inset-0 -z-10 bg-black opacity-30"></div> */}
        <div className="w-full text-left h-[150px]">
          <TypeAnimation
            sequence={[
              "Embark on a \ncinematic escapade, unravel stories with our app.",
              1000,
              "Embark on a \nfilmic adventure, relish tales through our app.",
              1000,
              "Embark on a \ncinematic sojourn, discover gems, curate effortlessly.",
              1000,
              "Embark on a \nfilmic odyssey, uncover treasures with our app.",
              1000,
              "Embark on a \njourney, explore cinematic wonders with our app.",
              1000,
              "Embark on a \ncinematic quest, unveil gems, classics, curate effortlessly.",
              1000,
              "Embark on a \ncinematic expedition, discover hidden treasures, curate seamlessly.",
            ]}
            wrapper="span"
            speed={20}
            deletionSpeed={70}
            className="align-left text-2xl sm:text-3xl font-cinzel bg-gradient-to-r from-purple-300 to-gray-600 bg-clip-text text-transparent w-full font-bold "
            style={{
              whiteSpace: "pre-line",
            }}
            repeat={Infinity}
          />
        </div>
        <Link to="/app">
          <button className="appBtn mt-5">Click To Start</button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
