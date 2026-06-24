import React from "react";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <section className="cart-section" id="cart">

      <h2 className="title">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty">Your cart is empty 😢</p>
      ) : (
        <div className="cart-container">

          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.image} alt={item.name} />

              <div className="cart-info">
                <h3>{item.name}</h3>
                <p>{item.price}</p>

                <button onClick={() => removeFromCart(index)}>
                  Remove
                </button>
              </div>
            </div>
          ))}

        </div>
      )}

    </section>
  );
};

export default Cart;