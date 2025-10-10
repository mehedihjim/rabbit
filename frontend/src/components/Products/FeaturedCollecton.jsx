import { Link } from "react-router";
import featuredImage from "../../assets/featured.jpg";

const FeaturedCollection = () => {
  return (
    <section className="py-20 px-4 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 shadow-2xl">
          <div className="absolute inset-0 bg-rabbit-red opacity-40"></div>

          <div className="relative grid lg:grid-cols-2 items-center min-h-[600px]">
            {/* Left Content */}
            <div className="p-12 lg:p-16 z-10">
              <div className="max-w-xl">
                <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-300 mb-4">
                  Explore The Collection
                </p>

                <h2 className="text-5xl lg:text-6xl font-light text-white mb-6 leading-tight font-rabbit-saadhu">
                  Apparel made for
                  <span className="block font-normal">Everyday Life</span>
                </h2>

                <p className="text-lg text-neutral-200 mb-10 leading-relaxed font-rabbit-saadhu">
                  {`An exclusive selection of women's and men's designer clothing,
                  shoes, accessories and the iconic world of Rabbit. Shop now
                  and enjoy fast worldwide shipping.`}
                </p>
                <Link
                  to="/collections/all"
                  className="text-xl font-light text-white font-rabbit-saadhu px-4 py-2 border border-white hover:bg-white hover:text-black transition duration-300"
                >
                  Explore Our Shop~
                </Link>
              </div>
            </div>

            {/* Right Content */}
            <div className="relative h-full min-h-[400px] lg:min-h-[600px]">
              <div className="absolute inset-0 lg:inset-y-0 lg:right-0">
                <img
                  src={featuredImage}
                  alt="Featured Collection"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-neutral-900/80 via-neutral-900/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
