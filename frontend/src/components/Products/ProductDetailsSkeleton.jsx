const ProductDetailsSkeleton = () => {
  return (
    <div className="p-6 animate-pulse">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left thumbnails */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="w-20 h-20 bg-gray-200 rounded-lg"
              ></div>
            ))}
          </div>

          {/* Main Image */}
          <div className="md:w-1/2 mb-4">
            <div className="w-full h-[400px] bg-gray-200 rounded-lg"></div>
          </div>

          {/* Mobile thumbnails */}
          <div className="md:hidden flex overflow-x-scroll space-x-4 mb-4">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="w-20 h-20 bg-gray-200 rounded-lg"
              ></div>
            ))}
          </div>

          {/* Right section */}
          <div className="md:w-1/2 md:ml-10 space-y-4">
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-6 bg-gray-300 rounded w-1/3"></div>
            <div className="h-16 bg-gray-100 rounded"></div>

            {/* Color buttons */}
            <div>
              <div className="h-4 bg-gray-200 w-20 mb-2 rounded"></div>
              <div className="flex gap-2">
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 rounded-full bg-gray-300"
                  ></div>
                ))}
              </div>
            </div>

            {/* Size buttons */}
            <div>
              <div className="h-4 bg-gray-200 w-20 mb-2 rounded"></div>
              <div className="flex gap-2">
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className="w-16 h-10 bg-gray-300 rounded"
                  ></div>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center space-x-4 mt-2">
              <div className="w-8 h-8 bg-gray-300 rounded"></div>
              <div className="w-6 h-6 bg-gray-200 rounded"></div>
              <div className="w-8 h-8 bg-gray-300 rounded"></div>
            </div>

            {/* Add to cart button */}
            <div className="w-full h-10 bg-gray-300 rounded"></div>

            {/* Characteristics */}
            <div className="mt-10 space-y-2">
              <div className="h-5 bg-gray-200 w-40 rounded"></div>
              <div className="h-4 bg-gray-100 w-1/2 rounded"></div>
              <div className="h-4 bg-gray-100 w-1/3 rounded"></div>
            </div>
          </div>
        </div>

        {/* You may also like */}
        <div className="mt-20">
          <div className="h-6 w-60 bg-gray-200 mx-auto rounded mb-4"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="h-60 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
