import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import productReducer from "./slice/productsSlice";
import cartReducer from "./slice/cartSlice";
import checkoutReducer from "./slice/checkoutSlice";
import orderReducer from "./slice/orderSlice";
import adminReducer from "./slice/adminSlice";
import adminProductReducer from "./slice/adminProductSlice";
import adminOrderReducer from "./slice/adminOrderSlice";
import { subscribeApi } from "../api/subscribeApi";

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
    orders: orderReducer,
    admin: adminReducer,
    adminProducts: adminProductReducer,
    adminOrders: adminOrderReducer,
    [subscribeApi.reducerPath]: subscribeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(subscribeApi.middleware),
});

export default store;
