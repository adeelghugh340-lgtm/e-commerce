import React from "react";

const SalesHistory = ({ orders }) => {
  return (
    <section className="history-section" id="history">

      <h2 className="title">📦 Sales History</h2>

      {orders.length === 0 ? (
        <p className="empty">No orders placed yet 😢</p>
      ) : (
        <div className="history-container">

          {orders.map((order, index) => (
            <div className="history-card" key={index}>

              <h3>Order #{index + 1}</h3>

              <p><strong>Name:</strong> {order.name}</p>
              <p><strong>Phone:</strong> {order.phone}</p>
              <p><strong>Address:</strong> {order.address}</p>
              <p><strong>Payment:</strong> {order.payment}</p>

              {/* ITEMS SAFE CHECK */}
              <div className="items">
                {order.items && order.items.length > 0 ? (
                  order.items.map((item, i) => (
                    <div key={i} className="item">
                      {item.name} - {item.price}
                    </div>
                  ))
                ) : (
                  <p>No items</p>
                )}
              </div>

              <p className="total">
                <strong>Total:</strong> PKR {order.total}
              </p>

            </div>
          ))}

        </div>
      )}

    </section>
  );
};

export default SalesHistory;