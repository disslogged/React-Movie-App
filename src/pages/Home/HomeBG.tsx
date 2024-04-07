import videoSrc from "./assets/BgHome.mp4";

const HomeBG = () => {
  return (
    <video
      loop
      autoPlay
      muted
      className="h-screen object-cover object-bottom -z-10 -mt-12 min-w-full"
    >
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
};

export default HomeBG;
