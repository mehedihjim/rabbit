import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  // cart drawer function
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  // mobile nav drawer function
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  return (
    <>
      <nav className="container mx-auto py-4 px-6 flex justify-between items-center">
        <div className="">
          <Link
            to="/"
            className="text-4xl font-bold font-rabbit-saadhu hover:text-black/80 duration-200"
          >
            Saadhu.
          </Link>
        </div>
        <div className="hidden md:flex space-x-6 text-sm font-medium uppercase">
          <NavLink
            to="/collections/all?gender=Men"
            className="text-gray-700 hover:text-black "
          >
            Men
          </NavLink>
          <NavLink
            to="/collections/all?gender=Women"
            className="text-gray-700 hover:text-black "
          >
            Women
          </NavLink>
          <NavLink
            to="/collections/all?category=Top Wear"
            className="text-gray-700 hover:text-black "
          >
            Top Wear
          </NavLink>
          <NavLink
            to="/collections/all?category=Bottom Wear"
            className="text-gray-700 hover:text-black "
          >
            Bottom Wear
          </NavLink>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/profile" className="hover:text-gray-300">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>
          <button
            onClick={toggleCartDrawer}
            className="cursor-pointer relative hover:text-black"
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            <span className="px-2 py-0.5 absolute -top-1 bg-rabbit-red text-white text-xs rounded-full">
              4
            </span>
          </button>
          <SearchBar />

          {/* Hidden Mobile Menu */}
          <button onClick={toggleNavDrawer} className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

      {/* Mobile Navbar */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Navbar Close button */}
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer} className="cursor-pointer">
            <IoMdClose className="text-gray-600 w-6 h-6" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav className="space-y-4">
            <Link
              to="/collections/all?gender=Men"
              className="block text-gray-600 hover:text-black"
              onClick={toggleNavDrawer}
            >
              Men
            </Link>
            <Link
              to="/collections/all?gender=Women"
              className="block text-gray-600 hover:text-black"
              onClick={toggleNavDrawer}
            >
              Women
            </Link>
            <Link
              to="/collections/all?category=Top Wear"
              className="block text-gray-600 hover:text-black"
              onClick={toggleNavDrawer}
            >
              Top Wear
            </Link>
            <Link
              to="/collections/all?category=Bottom Wear"
              className="block text-gray-600 hover:text-black"
              onClick={toggleNavDrawer}
            >
              Bottom Wear
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
