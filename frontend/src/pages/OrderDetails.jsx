import { useEffect, useState } from "react";
import { useParams } from "react-router";

const OrderDetails = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const mockOrderDetails = {
      _id: id,
      createdAt: new Date(),
      isPaid: false,
      isDelivered: false,
      paymentMethod: "Cash on Delivery",
      shippingMethod: "Standard",
      shippingAddress: { city: "New York", coutnry: "USA" },
      orderItems: [
        {
          productId: "1",
          name: "Hoodie",
          price: 120,
          quantity: 4,
          image: "https://picsum.photos/150?random=1",
        },
        {
          productId: "2",
          name: "Shorts",
          price: 120,
          quantity: 4,
          image: "https://picsum.photos/150?random=2",
        },
        {
          productId: "3",
          name: "Bandana",
          price: 40,
          quantity: 1,
          image: "https://picsum.photos/150?random=3",
        },
      ],
    };
    setOrderDetails(mockOrderDetails);
  }, [id]);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Order Details</h2>
      {!orderDetails ? (
        <p>No Order details found</p>
      ) : (
        <div className="p-4 sm:p-6 rounded-lg border border-gray-300">
          <div className="flex flex-col sm:flex-row justify-between mb-8">
            <div className="">
              <h3 className="text-lg md:text-xl font-semibold">
                Order ID: #{orderDetails._id}
              </h3>
              <p className="text-gray-600">
                {new Date(orderDetails.createdAt).toLocaleString()}
              </p>
            </div>
            <div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0">
              <span
                className={`${
                  orderDetails.isPaid
                    ? "bg-green-100 text-green-700 "
                    : "bg-red-100 text-red-700"
                } px-3 py-1 rounded-full text-start text-sm font-medium mb-2`}
              >
                {orderDetails.isPaid ? "Approved" : "Pending"}
              </span>
              <span
                className={`${
                  orderDetails.isDelivered
                    ? "bg-green-100 text-green-700 "
                    : "bg-red-100 text-red-700"
                } px-3 py-1 rounded-full text-start text-sm font-medium mb-2`}
              >
                {orderDetails.isDelivered ? "Delivered" : "Pending"}
              </span>
            </div>
          </div>
          {/* Customer Info*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div className="">
              <h4 className="text-lg font-semibold mb-2">Payment Info</h4>
              <p className="">Payment Method: {orderDetails.paymentMethod}</p>
              <p className="">
                Status: {orderDetails.isPaid ? "Paid" : "Undpaid"}
              </p>
            </div>
            <div className="">
              <h4 className="text-lg font-semibold mb-2">Shipping Info</h4>
              <p className="">Shipping Method: {orderDetails.shippingMethod}</p>
              <p className="">
                Address:{" "}
                {`${orderDetails.shippingAddress.city}, ${orderDetails.shippingAddress.coutnry}`}
              </p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <table className="min-w-full text-gray-600 mb-4">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Unit Price</th>
                  <th className="py-2 px-4">Quantity</th>
                  <th className="py-2 px-4">Total</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
