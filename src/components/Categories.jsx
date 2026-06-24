import React from "react";
const Categories = () => {
  return (
    <section className="categories-section" id="categories">

      <h2 className="title">🏏 Shop by Categories</h2>
      <p className="subtitle">Choose your cricket gear</p>

      <div className="categories-grid">

        <div className="category-card">
          <div className="icon">🏏</div>
          <h3>Bats</h3>
        </div>

        <div className="category-card">
          <div className="icon">🥎</div>
          <h3>Balls</h3>
        </div>

        <div className="category-card">
          <div className="icon">👕</div>
          <h3>Jerseys</h3>
        </div>

        <div className="category-card">
          <div className="icon">🧤</div>
          <h3>Gloves</h3>
        </div>

        <div className="category-card">
          <div className="icon">👟</div>
          <h3>Shoes</h3>
        </div>

        <div className="category-card">
          <div className="icon">🧢</div>
          <h3>Caps</h3>
        </div>

      </div>

    </section>
  );
};

export default Categories;