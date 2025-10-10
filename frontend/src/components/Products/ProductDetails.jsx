import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";
import ProductDetailsSkeleton from "./ProductDetailsSkeleton";
import {
  useGetProductByIdQuery,
  useGetProductsQuery,
} from "../../api/productsApi";

const ProductDetails = ({ productId }) => {
  const { id: paramId } = useParams();
  const id = productId || paramId;
  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductByIdQuery(id, {
    skip: !id, // skip the query if id is undefined
  });

  // Fetch similar products once product is loaded
  const { data: similarProducts } = useGetProductsQuery(
    { category: product?.category, limit: 8 },
    { skip: !product?.category }
  );

  const [mainImage, setMainImage] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  // Set main image when product changes
  useEffect(() => {
    if (product?.images?.length > 0) setMainImage(product.images[0].url);
  }, [product]);

  if (isLoading) return <ProductDetailsSkeleton />;
  if (isError) return <p>Error loading product</p>;
  if (!product) return null;

  const handleQuantityChange = (action) => {
    if (action === "plus") setQuantity((prev) => prev + 1);
    if (action === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      return toast.error("Please select color and size", { duration: 1000 });
    }

    setIsButtonDisabled(true);
    setTimeout(() => {
      toast.success("Added to cart successfully", { duration: 1000 });
      setIsButtonDisabled(false);
    }, 500);
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left Thumbnails */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                onClick={() => setMainImage(img.url)}
                src={img.url}
                alt={img.altText || `Thumbnail ${idx}`}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border-gray-400"
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Product Info */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {product.name}
            </h1>
            <p className="text-lg text-gray-600 mb-1 line-through">
              {product.originalPrice}
            </p>
            <p className="text-xl text-gray-500 mb-2">${product.price}</p>
            <p className="text-gray-600 mb-4">{product.description}</p>

            {/* Colors */}
            <div className="mb-4">
              <p className="text-gray-700">Color:</p>
              <div className="flex gap-2 mt-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border ${
                      selectedColor === color
                        ? "border-4 border-rabbit-red"
                        : "border-gray-400"
                    }`}
                    style={{
                      backgroundColor: color.toLowerCase(),
                      filter: "brightness(0.5)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-4">
              <p className="text-gray-700">Size:</p>
              <div className="flex gap-2 mt-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded border border-gray-300 ${
                      selectedSize === size ? "bg-black text-white" : ""
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6 flex items-center gap-4">
              <button
                onClick={() => handleQuantityChange("minus")}
                className="px-2 py-1 bg-gray-200 rounded"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => handleQuantityChange("plus")}
                className="px-2 py-1 bg-gray-200 rounded"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={isButtonDisabled}
              className={`bg-black text-white py-2 px-6 rounded w-full mb-4 ${
                isButtonDisabled
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-gray-900"
              }`}
            >
              {isButtonDisabled ? "Adding..." : "ADD TO CART"}
            </button>
          </div>
        </div>

        {/* Similar Products */}
        {similarProducts?.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl text-center font-medium mb-4">
              You may also like
            </h2>
            <ProductGrid
              products={similarProducts}
              loading={false}
              error={false}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
