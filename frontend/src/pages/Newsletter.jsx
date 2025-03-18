import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            Sign up for our newsletter
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
            Stay up to date with the roadmap progress, announcements and
            exclusive discounts feel free to sign up with your email.
          </p>
          <form action="#">
            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div className="relative w-full">
                <label
                  htmlFor="email"
                  className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email address
                </label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
                <form className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none forcus:ring-2 focus:ring-gray-500 transition-all"
                  />
                  <button
                    type="submit"
                    className="cursor-pointer bg-rabbit-red text-white px-6 py-3 text-sm rounded-r-md hover:bg-rabbit-red/90 transition-all"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
