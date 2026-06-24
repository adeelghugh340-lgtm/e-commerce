import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import SalesHistory from "./components/SalesHistory";
import Contact from "./components/Contact";

function App() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [orders, setOrders] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };


  return (
    <BrowserRouter>
      <Navbar search={search} setSearch={setSearch} />

      <Routes>

        {/* Home */}
        <Route path="*" element={<Home />} />





<Route
          path="/products"
          element={
            <Products
              addToCart={addToCart}
              search={search}
              filter={filter}
              setFilter={setFilter}
            />
          }
        />
        {/* Categories */}
        <Route
          path="/categories"
          element={<Categories />}
        />

       
        

        {/* Cart */}
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              removeFromCart={removeFromCart}
            />
          }
        />

        {/* Checkout */}
        <Route
          path="/checkout"
          element={<Checkout
  cartItems={cartItems}
  setOrders={setOrders}
/>}
        />

        {/* Sales History */}
       <Route path="/history" element={<SalesHistory orders={orders} />} />

        {/* Contact */}
        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;