import React from "react";
import Hero from "../components/Layout/Hero";
import GenderCollection from "../components/Products/GenderCollection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";
import FeaturedCollecton from "../components/Products/FeaturedCollecton";

const placeholderProducts = [
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

const Home = () => {
  return (
    <>
      <Hero />
      <GenderCollection />
      <NewArrivals />

      {/* =======Best Seller======= */}
      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      <ProductDetails />
      {/* Women Top Collection */}
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears for Women
        </h2>
        <ProductGrid products={placeholderProducts} />
      </div>

      {/* ========Featured Collection======== */}
      <FeaturedCollecton />
    </>
  );
};

export default Home;
