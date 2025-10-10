import React, { useEffect, useState, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { X } from "lucide-react";

const FilterSidebar = ({ products = [] }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 1000,
  });

  const [priceRange, setPriceRange] = useState([0, 1000]);

  // Calculate dynamic max price from products
  const maxProductPrice = useMemo(() => {
    if (!products || products.length === 0) return 1000;
    const prices = products.map((p) => p.discountPrice || p.price);
    return Math.ceil(Math.max(...prices) / 10) * 10; // Round up to nearest 10
  }, [products]);

  const categories = ["Top Wear", "Bottom Wear"];

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const materials = [
    "Cotton",
    "Wool",
    "Denim",
    "Polyester",
    "Silk",
    "Linen",
    "Viscose",
    "Fleece",
  ];

  const brands = [
    "Gucci",
    "Modern Fit",
    "Calvin Klein",
    "Street Style",
    "Beach Breeze",
    "Easy",
  ];

  const genders = ["Men", "Women"];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);

    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || maxProductPrice,
    });
    setPriceRange([0, params.maxPrice || maxProductPrice]);
  }, [searchParams, maxProductPrice]);

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    let newFilters = { ...filters };

    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...newFilters[name], value];
      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value);
      }
    } else if (type === "radio") {
      // If clicking the same radio button, clear it
      newFilters[name] = filters[name] === value ? "" : value;
    } else {
      newFilters[name] = value;
    }

    setFilters(newFilters);
    updateURLParams(newFilters);
  };

  const updateURLParams = (newFilters) => {
    const params = new URLSearchParams();
    Object.keys(newFilters).forEach((key) => {
      if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
        params.append(key, newFilters[key].join(","));
      } else if (
        newFilters[key] &&
        newFilters[key] !== 0 &&
        newFilters[key] !== maxProductPrice
      ) {
        params.append(key, newFilters[key]);
      }
    });
    setSearchParams(params);
  };

  const handlePriceChange = (e) => {
    const newPrice = parseInt(e.target.value);
    setPriceRange([0, newPrice]);
    const newFilters = { ...filters, minPrice: 0, maxPrice: newPrice };
    setFilters(newFilters);
    updateURLParams(newFilters);
  };

  const clearAllFilters = () => {
    const clearedFilters = {
      category: "",
      gender: "",
      size: [],
      material: [],
      brand: [],
      minPrice: 0,
      maxPrice: maxProductPrice,
    };
    setFilters(clearedFilters);
    setPriceRange([0, maxProductPrice]);
    setSearchParams(new URLSearchParams());
  };

  const hasActiveFilters =
    filters.category ||
    filters.gender ||
    filters.size.length > 0 ||
    filters.material.length > 0 ||
    filters.brand.length > 0 ||
    filters.maxPrice < maxProductPrice;

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1 transition-colors"
            >
              <X className="w-4 h-4" />
              Clear All
            </button>
          )}
        </div>

        {/* Category Filter */}
        <div className="mb-6 pb-6 border-b border-gray-100">
          <label className="block text-sm font-medium text-gray-900 mb-3">
            Category
          </label>
          <div className="space-y-2">
            {categories.map((category) => (
              <label
                key={category}
                className="flex items-center cursor-pointer group"
              >
                <input
                  type="radio"
                  name="category"
                  className="w-4 h-4 text-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-offset-0 border-gray-300 cursor-pointer"
                  value={category}
                  onChange={handleFilterChange}
                  checked={filters.category === category}
                />
                <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900">
                  {category}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Gender Filter */}
        <div className="mb-6 pb-6 border-b border-gray-100">
          <label className="block text-sm font-medium text-gray-900 mb-3">
            Gender
          </label>
          <div className="space-y-2">
            {genders.map((gender) => (
              <label
                key={gender}
                className="flex items-center cursor-pointer group"
              >
                <input
                  type="radio"
                  name="gender"
                  className="w-4 h-4 text-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-offset-0 border-gray-300 cursor-pointer"
                  value={gender}
                  onChange={handleFilterChange}
                  checked={filters.gender === gender}
                />
                <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900">
                  {gender}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Size Filter */}
        <div className="mb-6 pb-6 border-b border-gray-100">
          <label className="block text-sm font-medium text-gray-900 mb-3">
            Size
          </label>
          <div className="grid grid-cols-3 gap-2">
            {sizes.map((size) => (
              <label key={size} className="cursor-pointer">
                <input
                  type="checkbox"
                  name="size"
                  className="peer sr-only"
                  value={size}
                  onChange={handleFilterChange}
                  checked={filters.size.includes(size)}
                />
                <div className="px-3 py-2 text-center text-sm font-medium border border-gray-300 rounded-md peer-checked:bg-gray-900 peer-checked:text-white peer-checked:border-gray-900 hover:border-gray-400 transition-all">
                  {size}
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Material Filter */}
        <div className="mb-6 pb-6 border-b border-gray-100">
          <label className="block text-sm font-medium text-gray-900 mb-3">
            Material
          </label>
          <div className="space-y-2">
            {materials.map((material) => (
              <label
                key={material}
                className="flex items-center cursor-pointer group"
              >
                <input
                  type="checkbox"
                  name="material"
                  value={material}
                  onChange={handleFilterChange}
                  checked={filters.material.includes(material)}
                  className="w-4 h-4 text-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-offset-0 border-gray-300 rounded cursor-pointer"
                />
                <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900">
                  {material}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Brands Filter */}
        <div className="mb-6 pb-6 border-b border-gray-100">
          <label className="block text-sm font-medium text-gray-900 mb-3">
            Brand
          </label>
          <div className="space-y-2">
            {brands.map((brand) => (
              <label
                key={brand}
                className="flex items-center cursor-pointer group"
              >
                <input
                  type="checkbox"
                  name="brand"
                  value={brand}
                  onChange={handleFilterChange}
                  checked={filters.brand.includes(brand)}
                  className="w-4 h-4 text-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-offset-0 border-gray-300 rounded cursor-pointer"
                />
                <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900">
                  {brand}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-900 mb-3">
            Price Range
          </label>
          <input
            type="range"
            value={priceRange[1]}
            onChange={handlePriceChange}
            name="priceRange"
            min={0}
            max={maxProductPrice}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900"
          />
          <div className="flex justify-between items-center mt-3">
            <span className="text-sm font-medium text-gray-900">$0</span>
            <span className="text-sm font-medium text-gray-900">
              ${priceRange[1]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
