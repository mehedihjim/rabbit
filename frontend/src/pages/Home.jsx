import Hero from "../components/Layout/Hero";
import GenderCollection from "../components/Products/GenderCollection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";
import FeaturedCollecton from "../components/Products/FeaturedCollecton";
import FeaturesSection from "../components/Products/FeaturesSection";
import ProductDetailsSkeleton from "../components/Products/ProductDetailsSkeleton";
import {
  useGetBestSellerProductsQuery,
  useGetProductsQuery,
} from "../api/productsApi";

const Home = () => {
  const {
    data: topWears,
    isLoading: topWearsLoading,
    isError: topWearsError,
  } = useGetProductsQuery({
    gender: "Women",
    category: "Bottom Wear",
    limit: 8,
  });

  const { data: bestSellerProducts } = useGetBestSellerProductsQuery();

  return (
    <>
      <Hero />
      <GenderCollection />
      <NewArrivals />

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
        <ProductGrid
          products={topWears}
          loading={topWearsLoading}
          error={topWearsError}
        />
      </div>

      <FeaturedCollecton />
      <FeaturesSection />
    </>
  );
};

export default Home;
