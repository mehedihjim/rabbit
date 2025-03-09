import React from "react";
import { Link } from "react-router";
import featuredImage from "../../assets/featured.jpg";

const FeaturedCollecton = () => {
  return (
    <section className="py-16 px-4 lg:px-0 text-white">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-rabbit-red/80 rounded-3xl">
        {/* Left Content */}
        <div className="lg:w-1/2 p-8 text-center lg:text-left">
          <h2 className="text-lg font-semibold text-white mb-2">
            Explore The Collection
          </h2>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Apparel made for Everyday Life
          </h2>
          <p className="text-lg text-white opacity-90 mb-6">
            An exclusive selection of womens and mens designer clothing, shoes,
            accessories and the iconic world of Rabbit.
          </p>
          <Link
            to="/collections/all"
            className="bg-white text-rabbit-red px-6 py-3 border border-white rounded-lg text-lg hover:bg-transparent hover:text-white duration-300"
          >
            Shop Now
          </Link>
        </div>
        {/* Right Content */}
        <div className="lg:w-1/2">
          <img
            src={featuredImage}
            alt="Featured Collection"
            className="w-full h-full object-cover lg:rounded-r-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollecton;
