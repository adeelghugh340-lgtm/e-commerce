import React from "react";
import Bat from "../data/Bat.webp";
import shoes from "../data/shoes.jpg";
import bals from "../data/bals.jpg";
import jersey from "../data/jersey.jpg";
import Heega from "../data/Heega.webp";
import Cap from "../data/Cap.webp";
import Stumps from "../data/Stumps.webp";

const Products = ({ addToCart, search, filter, setFilter }) => {

  const products = [
    {
      id: 1,
      name: "Bat",
      category: "bat",
      price: 8500,
      image: Bat
    },
    {
      id: 2,
      name: "Leather Ball",
      category: "ball",
      price: 1200,
      image: bals
    },
    {
      id: 3,
      name: "Team Jersey",
      category: "jersey",
      price: 2500,
      image: jersey
    },
    {
      id: 4,
      name: "Batting Gloves",
      category: "gloves",
      price: 1800,
      image: Heega
    },
    {
      id: 5,
      name: "Cricket Shoes",
      category: "shoes",
      price: 1800,
      image: shoes
    },
    {
      id: 6,
      name: "Cricket Cap",
      category: "cap",
      price: 500,
      image: Cap
    },
    {
      id: 7,
      name: "Cricket Stumps",
      category: "stumps",
      price: 3000,
      image: Stumps
    }
  ];

  const filteredProducts = products.filter((p) => {
    return (
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (filter === "all" || p.category === filter)
    );
  });

  return (
    <section id="products" className="products-section">

      <h2>🔥 Products</h2>

      {/* FILTER BUTTONS */}
      <div className="filters">

<button onClick={() => setFilter("all")}>
  All
</button>

<button onClick={() => setFilter("bat")}>
  <img src="https://cdn-icons-png.flaticon.com/512/3274/3274106.png" alt="Bat" width="20" />
  Bat
</button>

<button onClick={() => setFilter("ball")}>
  <img src="https://cdn-icons-png.flaticon.com/512/1040/1040250.png" alt="Ball" width="20" />
  Ball
</button>

<button onClick={() => setFilter("jersey")}>
  <img src="https://cdn-icons-png.flaticon.com/512/1048/1048941.png" alt="Jersey" width="20" />
  Jersey
</button>

<button onClick={() => setFilter("gloves")}>
  <img src="https://cdn-icons-png.flaticon.com/512/1040/1040247.png" alt="Gloves" width="20" />
  Gloves
</button>

<button onClick={() => setFilter("shoes")}>
  <img src="https://cdn-icons-png.flaticon.com/512/1040/1040246.png" alt="Shoes" width="20" />
  Shoes
</button>

<button onClick={() => setFilter("cap")}>
  <img src="https://cdn-icons-png.flaticon.com/512/892/892458.png" alt="Cap" width="20" />
  Cap
</button>

<button onClick={() => setFilter("stumps")}>
  <img src="https://cdn-icons-png.flaticon.com/512/1998/1998614.png" alt="Stumps" width="20" />
  Stumps
</button>

</div>

      {/* PRODUCTS GRID */}
      <div className="products-grid">

        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>

            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p>Category: {product.category}</p>

            <span>PKR {product.price}</span>

            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Products;