import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { createCheckout } from "../../redux/slice/checkoutSlice";

const Checkout = () => {
  //Take a break here and check the code
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cart, loading, error } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  const [checkoutId, setCheckoutId] = useState(null);
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  useEffect(() => {
    if (!cart || !cart.products || cart.products.length === 0) {
      navigate("/");
    }
  }, [cart, navigate]);

  const handleCreateCheckout = async (e) => {
    e.preventDefault();

    try {
      const res = await dispatch(
        createCheckout({
          checkoutItems: cart.products,
          shippingAddress,
          paymentMethod: "Online",
          totalPrice: cart.totalPrice,
        })
      );

      if (res.payload && res.payload._id) {
        setCheckoutId(res.payload._id);

        // Now redirect to payment gateway
        await handlePaymentRedirect(cart, {
          name: user.name,
          email: user.email,
          address: shippingAddress.address,
          phone: user.phone,
        });
      }
    } catch (err) {
      console.error("Checkout creation failed:", err);
    }
  };

  const handlePaymentSuccess = async (details) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/checkout/pay`,
        { paymentStatus: "paid", paymentDetails: details },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );

      if (response.status === 200) {
        await handleFinalizeCheckout(checkoutId);
      }
    } catch (err) {
      console.error("Payment update failed:", err);
    }
  };

  const handlePaymentRedirect = async (cart, user) => {
    try {
      const response = await axios.post(
        "http://localhost:9000/api/payment", // your backend URL
        { cart, user }
      );

      if (response.data.paymentUrl) {
        window.location.href = response.data.paymentUrl; // Redirect to SSLCommerz payment page
      } else {
        console.error("Payment URL not received");
      }
    } catch (error) {
      console.error("Payment redirection failed:", error);
    }
  };

  const handleFinalizeCheckout = async (id) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/checkout/${id}/finalize`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );

      if (response.status === 200) {
        navigate("/order-confirmation");
      }
    } catch (err) {
      console.error("Finalizing checkout failed:", err);
    }
  };

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center">Error: {error}</p>;
  if (!cart || !cart.products?.length)
    return <p className="text-center">Your cart is empty</p>;

  useEffect(() => {
    if (!checkoutId) return;

    const paymentData = {
      total_amount: cart.totalPrice,
      currency: "BDT",
      tran_id: checkoutId,
      success_url: `${import.meta.env.VITE_BACKEND_URL}/api/checkout/success`,
      fail_url: `${import.meta.env.VITE_BACKEND_URL}/api/checkout/fail`,
      cancel_url: `${import.meta.env.VITE_BACKEND_URL}/api/checkout/cancel`,
      shipping_method: "Courier",
      product_name: "Cart Products",
      product_category: "Mixed",
      product_profile: "general",
      cus_name: `${shippingAddress.firstName} ${shippingAddress.lastName}`,
      cus_email: user?.email,
      cus_add1: shippingAddress.address,
      cus_city: shippingAddress.city,
      cus_postcode: shippingAddress.postalCode,
      cus_country: shippingAddress.country,
      cus_phone: shippingAddress.phone,
    };

    // Attach postdata to window (important)
    window.postdata = paymentData;

    const script = document.createElement("script");
    script.src =
      "https://sandbox.sslcommerz.com/embed.min.js?" +
      Math.random().toString(36).substring(7); // avoid caching
    script.id = "sslczPayScript";
    script.setAttribute("token", "testbox");
    script.type = "text/javascript";

    const container = document.getElementById("sslczPayBtnContainer");

    // Prevent duplicate script injections
    if (!document.getElementById("sslczPayScript") && container) {
      container.innerHTML = ""; // Clear any old buttons
      container.appendChild(script);
    }

    return () => {
      // Cleanup script when component unmounts or checkoutId changes
      const existing = document.getElementById("sslczPayScript");
      if (existing) {
        existing.remove();
      }
    };
  }, [checkoutId]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      {/* Left Section */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl uppercase mb-6">Checkout</h2>
        <form onSubmit={handleCreateCheckout}>
          {/* Contact Details */}
          <h3 className="text-lg mb-4">Contact Details</h3>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={user?.email || ""}
              className="w-full p-2 border border-gray-300 rounded"
              disabled
            />
          </div>

          {/* Delivery Details */}
          <h3 className="text-lg mb-4">Delivery</h3>
          <div className="mb-4 grid grid-cols-2 gap-4">
            {["firstName", "lastName"].map((field) => (
              <div key={field}>
                <label className="block text-gray-700 capitalize">
                  {field.replace("Name", " Name")}
                </label>
                <input
                  type="text"
                  required
                  value={shippingAddress[field]}
                  onChange={(e) =>
                    setShippingAddress({
                      ...shippingAddress,
                      [field]: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            ))}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              required
              value={shippingAddress.address}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  address: e.target.value,
                })
              }
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4 grid grid-cols-2 gap-4">
            {["city", "postalCode"].map((field) => (
              <div key={field}>
                <label className="block text-gray-700 capitalize">
                  {field.replace(/([A-Z])/g, " $1")}
                </label>
                <input
                  type="text"
                  required
                  value={shippingAddress[field]}
                  onChange={(e) =>
                    setShippingAddress({
                      ...shippingAddress,
                      [field]: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            ))}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Country</label>
            <input
              type="text"
              required
              value={shippingAddress.country}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  country: e.target.value,
                })
              }
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              type="text"
              required
              value={shippingAddress.phone}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  phone: e.target.value,
                })
              }
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mt-6">
            {!checkoutId ? (
              <button
                type="submit"
                className="w-full bg-rabbit-red text-white py-3 rounded hover:bg-rabbit-red/90 duration-200"
              >
                Continue to Payment
              </button>
            ) : (
              <div id="sslczPayBtnContainer" />
            )}
          </div>
        </form>
      </div>

      {/* Right Section - Order Summary */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg mb-4">Order Summary</h3>
        <div className="border-t border-gray-300 py-4 mb-4">
          {cart.products.map((product, idx) => (
            <div
              className="flex items-start justify-between py-2 border-b border-gray-300"
              key={idx}
            >
              <div className="flex items-start">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-24 object-cover mr-4"
                />
                <div>
                  <h3 className="text-md">{product.name}</h3>
                  <p className="text-gray-500">Size: {product.size}</p>
                  <p className="text-gray-500">Color: {product.color}</p>
                </div>
              </div>
              <p className="text-xl">${product.price?.toLocaleString()}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center text-lg mb-4">
          <p>Subtotal</p>
          <p>${cart.totalPrice?.toLocaleString()}</p>
        </div>
        <div className="flex justify-between items-center text-lg">
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div className="flex justify-between items-center text-lg mt-4 border-t border-gray-300 pt-4">
          <p>Total</p>
          <p>${cart.totalPrice?.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
