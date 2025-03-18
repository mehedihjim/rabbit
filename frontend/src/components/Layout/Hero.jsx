import { Link } from "react-router";
import heroVideo from "../../assets/saadhu-hero.mp4";

const Hero = () => {
  return (
    <section className="relative">
      <video
        autoPlay
        loop
        muted
        className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser doesn't support the video
      </video>
      <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
        <div className="text-center text-white p-6 ">
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase mb-4 flex flex-col font-rabbit-saadhu">
            SAADHU. <span className="text-white/70 ">Fashion- 2025</span>
          </h1>
          <p className="text-sm tracking-tighter md:text-lg mb-6">
            Explore our new Fashion Collection with Fast worldwide shipping
          </p>
          <Link
            to="/collections/all"
            className="bg-white text-gray-950 px-6 py-2 border border-white hover:bg-transparent hover:text-white duration-300 rounded-sm text-lg"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
