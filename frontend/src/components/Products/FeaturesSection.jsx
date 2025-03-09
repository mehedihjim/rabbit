import {
  HiArrowPathRoundedSquare,
  HiOutlineCreditCard,
  HiShoppingBag,
} from "react-icons/hi2";

const FeaturesSection = () => {
  return (
    <section className="px-4 py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Feature One */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiShoppingBag className="text-xl text-rabbit-red" />
          </div>
          <h4 className="tracking-tighter mb-2">Free International Shipping</h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            On all orders over 100$
          </p>
        </div>
        {/* Feature Two */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiArrowPathRoundedSquare className="text-xl text-rabbit-red" />
          </div>
          <h4 className="tracking-tighter mb-2">45 Days Return</h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            Moneyback Guarantee
          </p>
        </div>
        {/* Feature Three */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiOutlineCreditCard className="text-xl text-rabbit-red" />
          </div>
          <h4 className="tracking-tighter mb-2">Secure Checkout</h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            100% secured checkouts
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
