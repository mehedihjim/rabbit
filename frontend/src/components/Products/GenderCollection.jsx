import { Link } from "react-router";
import menCollecton from "../../assets/mens-collection.jpg";
import womenCollecton from "../../assets/womens-collection.jpg";
import { ArrowRight } from "lucide-react";

const GenderCollection = () => {
  return (
    <section className="py-20 px-4 lg:px-0 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Your Style
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our curated collections designed for every occasion and
            personality
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          {/* Men's Collection */}
          <div className="group cursor-pointer relative flex-1 overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.02]">
            <div className="relative h-[600px] md:h-[700px]">
              <img
                src={menCollecton}
                alt="Men's Collection"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/80"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                <div className="transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                  <div className="inline-block px-3 py-1 bg-transparent border border-white text-white text-sm font-medium rounded-full mb-4 opacity-90">
                    New Arrivals
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    {`Men's Collection`}
                  </h3>
                  <p className="text-gray-200 mb-6 text-lg max-w-md opacity-90">
                    Sophisticated styles for the modern gentleman
                  </p>
                  <Link
                    to="/collections/all?gender=Men"
                    className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 font-normal hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 group/button"
                  >
                    EXPLORE THE COLLECTION
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/button:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Women's Collection */}
          <div className="group relative flex-1 cursor-pointer overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.02]">
            <div className="relative h-[600px] md:h-[700px]">
              <img
                src={womenCollecton}
                alt="Women's Collection"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-rabbit-red/70 via-rose-900/20 to-transparent transition-opacity duration-500 group-hover:from-rose-900/80"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                <div className="transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                  <div className="inline-block px-3 py-1 bg-transpartent border border-white text-white text-sm font-medium rounded-full mb-4 opacity-90">
                    Trending Now
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    {`Women's Collection`}
                  </h3>
                  <p className="text-gray-200 mb-6 text-lg max-w-md opacity-90">
                    Elegant designs for every confident woman
                  </p>
                  <Link
                    to="/collections/all?gender=Women"
                    className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 font-normal hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 group/button"
                  >
                    EXPLORE THE COLLECTION
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/button:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollection;
