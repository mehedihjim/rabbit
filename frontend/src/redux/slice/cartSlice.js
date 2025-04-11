import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Helper function to get the cart from localStorage
const loadCartFromStorage = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : { products: [] };
};

//Helper function to save the cart to localStorage
const saveCartToStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

//Fetch cart for a user or guest
export const fetchCart = createAsyncThunk(""cart/fetchCart", async (guestId) => {
  const response = await axios.get(
    `${import.meta.env.VITE_BACKEND_URL}/api/cart/${guestId}`
  );
  return response.data; // Return the cart data
}   
