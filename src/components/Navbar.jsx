import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ search, setSearch }) => {
  return (
    <nav className="nav">

      <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      <Link to="/categories">Categories</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/checkout">Checkout</Link>
      <Link to="/history">History</Link>
      <Link to="/contact">Contact</Link>

      {/* 🔍 SEARCH */}
      <input
  type="text"
  placeholder="Search products..."
  value={search}
  onChange={(e) => {
    setSearch(e.target.value);

    const section = document.getElementById("products");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth"
      });
    }
  }}
/>

    </nav>
  );
};

export default Navbar;