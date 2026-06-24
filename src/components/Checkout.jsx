import React, { useState } from "react";
import images from '../data/images.png'
const Checkout = ({ cartItems, setOrders }) => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState(""); // 👈 NEW
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

const total = cartItems.reduce((sum, item) => {
  const price = Number(String(item.price).replace("PKR ", ""));
  return sum + price;
}, 0);


  const handleOrder = () => {

    setError("");
    setSuccess("");

   
    if (!name || !phone || !address || !payment) {
      setError("All fields including payment method are required");
      return;
    }

    if (phone.length < 10) {
      setError("Enter valid phone number");
      return;
    }

    if (cartItems.length === 0) {
      setError("Cart is empty");
      return;
    }
     setOrders(prev => [
    ...prev,
    {
      name,
      phone,
      address,
      payment,
      items: cartItems,
      total
    }
  ]);

    setSuccess("Order placed successfully!");
    console.log("setOrders:", setOrders);
  };



  

  return (
    <section className="checkout-section" id="checkout">

      <h2 className="title">🧾 Checkout</h2>

      {/* ORDER SUMMARY */}
      <div className="summary">

        <h3>Order Summary</h3>

        {cartItems.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cartItems.map((item, index) => (
            <div className="summary-item" key={index}>
              <span>{item.name}</span>
              <span>{item.price}</span>
            </div>
          ))
        )}

        <hr />

        <div className="total">
          <strong>Total:</strong>
          <strong>PKR {total}</strong>
        </div>

      </div>

      {/* CHECKOUT FORM */}
      <div className="form">

        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

      {/* 🟢 PAYMENT INTERFACE */}
<div className="payment">

  <h3>Payment Method</h3>

  <div className="payment-options">

    <label className="payment-card">
      <input
        type="radio"
        name="payment"
        value="cod"
        onChange={(e) => setPayment(e.target.value)}
      />
      <img src="https://cdn-icons-png.flaticon.com/512/1048/1048941.png" alt="COD" />
      <span>Cash on Delivery</span>
    </label>

    <label className="payment-card">
      <input
        type="radio"
        name="payment"
        value="card"
        onChange={(e) => setPayment(e.target.value)}
      />
      <img src="https://cdn-icons-png.flaticon.com/512/179/179457.png" alt="Card" />
      <span>Card</span>
    </label>

    <label className="payment-card">
      <input
        type="radio"
        name="payment"
        value="jazzcash"
        onChange={(e) => setPayment(e.target.value)}
      />
    <img src={images} alt="JazzCash" />
      <span>JazzCash</span>
    </label>

  </div>

</div>

        <button onClick={handleOrder}>
          Place Order 🏏
        </button>
       

      </div>

    </section>
  );
};

export default Checkout;