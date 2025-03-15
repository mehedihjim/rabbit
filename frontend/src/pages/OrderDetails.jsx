import { useEffect, useState } from "react";
import { React, useParams } from "react-router";

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
      shippingAddress: { city: "New York", coutnry: "USA" },
      orderItems: { productId: "1", coutnry: "USA" },
    };
  });

  return <div>OrderDetails</div>;
};

export default OrderDetails;
