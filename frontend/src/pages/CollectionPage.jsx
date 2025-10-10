import { useEffect, useRef, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";
import { useParams, useSearchParams } from "react-router";
import { useGetProductsQuery } from "../api/productsApi";

const CollectionPage = () => {
  const { collection } = useParams();
  const [searchParams] = useSearchParams();
  const queryParams = Object.fromEntries([...searchParams]);
  const {
    data: products,
    isLoading,
    isError,
  } = useGetProductsQuery({
    collection,
    ...queryParams,
  });

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
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-2">
            All Collections
          </h1>
          <p className="text-gray-600">
            Discover our curated selection of premium apparel
          </p>
          {/* Sort Options */}
          <div className="mb-6">
            <SortOptions />
          </div>
        </div>

        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-6">
          <button
            onClick={toggleSidebar}
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 flex items-center justify-center gap-2 text-gray-700 font-medium hover:bg-gray-50 transition-colors shadow-sm"
          >
            <SlidersHorizontal className="w-5 h-5" />
            Filters & Sort
          </button>
        </div>

        <div className="flex gap-8">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <FilterSidebar products={products} />
          </aside>

          {/* Mobile Filter Sidebar Overlay */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={toggleSidebar}
            ></div>
          )}

          {/* Mobile Filter Sidebar */}
          <aside
            ref={sidebarRef}
            className={`fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-white z-50 overflow-y-auto transition-transform duration-300 lg:hidden shadow-2xl ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between z-10">
              <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
              <button
                onClick={toggleSidebar}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <FilterSidebar products={products} />
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {/* Product Grid */}
            <ProductGrid
              products={products}
              loading={isLoading}
              error={isError}
            />
          </main>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
