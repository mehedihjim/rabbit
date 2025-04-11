import React, { use, useEffect, useState } from "react";
import Hero from "../components/Layout/Hero";
import GenderCollection from "../components/Products/GenderCollection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";
import FeaturedCollecton from "../components/Products/FeaturedCollecton";
import FeaturesSection from "../components/Products/FeaturesSection";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ProductDetailsSkeleton from "../components/Products/ProductDetailsSkeleton";
import { fetchProductsByFilters } from "./../redux/slice/productsSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [bestSellerProducts, setBestSellerProducts] = useState(null);

  useEffect(() => {
    //Fetch products for a specific collection
    dispatch(
      fetchProductsByFilters({
        gender: "Women",
        category: "Bottom Wear",
        limit: 8,
      })
    );
    //Fetch best seller products
    const fetchBestSeller = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`
        );

        setBestSellerProducts(response.data);
      } catch (error) {
        console.error("Error fetching best seller products:", error);
      }
    };
    fetchBestSeller();
  }, [dispatch]);

  return (
    <>
      <Hero />
      <GenderCollection />
      <NewArrivals />

      {/* =======Best Seller======= */}
      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      {bestSellerProducts ? (
        <ProductDetails productId={bestSellerProducts._id} />
      ) : (
        <ProductDetailsSkeleton />
      )}
      {/* Women Top Collection */}
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears for Women
        </h2>
        <ProductGrid products={products} loading={loading} error={error} />
      </div>

      <FeaturedCollecton />
      <FeaturesSection />
    </>
  );
};

export default Home;
