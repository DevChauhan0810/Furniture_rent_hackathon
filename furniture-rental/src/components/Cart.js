// src/components/Cart.js
import React from 'react';
import './Cart.css';

const Cart = ({ cartItems = [], setView }) => { // Provide default value
  return (
    <div className="container">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
            </div>
          ))}
        </div>
      )}
      <button onClick={() => setView('catalog')}>Back to Catalog</button>
    </div>
  );
};

export default Cart;
