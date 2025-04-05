const express = require("express");
const Checkout = require("../models/Checkout");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const Order = require("../models/Order");
const { protect, admin } = require("../middleware/authMiddleware");

//@route POST /api/checkout
//@desc Create a new checkout session
//@access Private
router.post("/", protect, async (req, res) => {
  const { checkoutItems, shippingAddress, PaymentMethod, totalPrice } =
    req.body;

  if (!checkoutItems || checkoutItems.length === 0) {
    return;
    res.status(400).json({ message: "no items in checkout" });
  }

  try {
    //Create a new checkout session
    const newCheckout = await Checkout.create({
      user: req.user._id,
      checkoutItems: checkoutItems,
      shippingAddress,
      PaymentMethod,
      totalPrice,
      payment,
    });
  } catch (error) {}
});
