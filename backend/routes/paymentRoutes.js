const SSLCommerz = require("sslcommerz-nodejs");

const sslcommerz = new SSLCommerz({
  store_id: process.env.SSLC_STORE_ID, // set these in your backend .env
  store_passwd: process.env.SSLC_STORE_PASS, // keep them secret!
  is_live: false, // change to true in production
});

app.post("/api/payment", async (req, res) => {
  const { cart, user } = req.body; // Expect cart & user data from frontend

  // Calculate total amount from cart (or pass directly)
  const totalAmount = cart.products.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0
  );

  try {
    const response = await sslcommerz.init({
      total_amount: totalAmount,
      currency: "BDT",
      tran_id: `order_${Date.now()}`, // unique transaction id
      success_url: "http://localhost:3000/payment-success", // your frontend success page
      fail_url: "http://localhost:3000/payment-fail",
      cancel_url: "http://localhost:3000/payment-cancel",
      ipn_url: "http://localhost:9000/api/payment/ipn", // optional for notifications
      shipping_method: "NO",
      product_name: "Shopping Cart Items",
      product_category: "Ecommerce",
      product_profile: "general",
      cus_name: user?.name || "Guest User",
      cus_email: user?.email || "guest@example.com",
      cus_add1: user?.address || "",
      cus_phone: user?.phone || "017xxxxxxxx",
    });

    res.json({ paymentUrl: response.GatewayPageURL });
  } catch (error) {
    console.error("Payment initiation error:", error);
    res.status(500).json({ error: "Payment initiation failed" });
  }
});
