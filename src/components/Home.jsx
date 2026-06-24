
import React from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Home = () => {
    const navigate = useNavigate();

useEffect(() => {
  navigate("/");
}, []);
  return (
    
    <div className="home">

     
    <section className="hero">
  {/* <div className="hero-content">
    <h1>🏏 Premium Cricket Store</h1>
    <p>Buy Professional Bats, Balls, Jerseys & Accessories</p>
    <button>Shop Now</button>
  </div> */}
</section>

     
      <section className="categories">
        <h2>Shop by Category</h2>

        <div className="cat-grid">
          <div className="cat-card">🏏 Bats</div>
          <div className="cat-card">🥎 Balls</div>
          <div className="cat-card">👕 Jerseys</div>
          <div className="cat-card">🧤 Gloves</div>
          <div className="cat-card">👟 Shoes</div>
          <div className="cat-card">🧢 Caps</div>
        </div>
      </section>

     
      <section className="offer">
        <h2>🔥 20% OFF on Premium Cricket Bats</h2>
        <p>Limited time offer — Grab your favorite bat now!</p>
      </section>

     
      <section className="why">
        <h2>Why Choose Us?</h2>

        <div className="why-grid">
          <div className="why-card">🚚 Fast Delivery</div>
          <div className="why-card">✔️ 100% Original Products</div>
          <div className="why-card">💰 Cash on Delivery</div>
          <div className="why-card">🔁 Easy Returns</div>
        </div>
      </section>

    </div>
  );
};

export default Home;