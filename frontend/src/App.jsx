import { BrowserRouter, Routes, Route } from "react-router";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CollectionPage from "./pages/CollectionPage";
import ProductDetails from "./components/Products/ProductDetails";
import Checkout from "./components/Cart/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import OrderDetails from "./pages/OrderDetails";
import MyOrderPages from "./pages/MyOrderPages";
import AdminLayout from "./components/Admin/AdminLayout";
import AdminHomepage from "./pages/AdminHomepage";
import UserManagement from "./components/Admin/UserManagement";
import ProductManagement from "./components/Admin/ProductManagement";
import EditProductPage from "./components/Admin/EditProductPage";
import OrderManagement from "./components/Admin/OrderManagement";
import Newsletter from "./pages/Newsletter";

import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route
              path="/collections/:collection"
              element={<CollectionPage />}
            />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/order/:id" element={<OrderDetails />} />
            <Route path="/my-orders" element={<MyOrderPages />} />
            <Route path="/newsletter" element={<Newsletter />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminHomepage />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="products" element={<ProductManagement />} />
            <Route path="products/:id/edit" element={<EditProductPage />} />
            <Route path="orders" element={<OrderManagement />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
