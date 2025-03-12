import React, { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    // Add Event Listener for clicks

    document.addEventListener("mousedown", handleClickOutside);

    // clean event listener

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        {
          _id: 1,
          name: "Liquid Touch Crewneck T-Shirt",
          price: 25,
          images: [{ url: "https://picsum.photos/500/500?random=1" }],
        },
        {
          _id: 2,
          name: "Liquid Touch Crewneck T-Shirt",
          price: 25,
          images: [{ url: "https://picsum.photos/500/500?random=2" }],
        },
        {
          _id: 3,
          name: "Liquid Touch Crewneck T-Shirt",
          price: 25,
          images: [{ url: "https://picsum.photos/500/500?random=3" }],
        },
        {
          _id: 4,
          name: "Cotton Pocket Classic T-Shirt",
          price: 40,
          images: [{ url: "https://picsum.photos/500/500?random=4" }],
        },
        {
          _id: 5,
          name: "Liquid Touch Crewneck T-Shirt",
          price: 25,
          images: [{ url: "https://picsum.photos/500/500?random=5" }],
        },
        {
          _id: 6,
          name: "Liquid Touch Crewneck T-Shirt",
          price: 25,
          images: [{ url: "https://picsum.photos/500/500?random=6" }],
        },
        {
          _id: 7,
          name: "Liquid Touch Crewneck T-Shirt",
          price: 25,
          images: [{ url: "https://picsum.photos/500/500?random=7" }],
        },
        {
          _id: 8,
          name: "Cotton Pocket Classic T-Shirt",
          price: 40,
          images: [{ url: "https://picsum.photos/500/500?random=8" }],
        },
      ];
      setProducts(fetchedProducts);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile filter button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden border border-gray-300 p-2 flex justify-center items-center"
      >
        <FaFilter className="mr-2" />
        Filters
      </button>

      {/* Filter Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <FilterSidebar />
      </div>
      <div className="flex-grow f-4">
        <h2 className="text-2xl uppercase mt-4">All Collection</h2>

        {/* Sort Options */}
        <SortOptions />

        {/* Product Grid */}
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default CollectionPage;
