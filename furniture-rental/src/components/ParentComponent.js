// Example parent component
import React, { useState } from 'react';
import Cart from './Cart';
import Catalog from './Catalog';

const ParentComponent = () => {
  const [view, setView] = useState('catalog'); // State to manage the current view
  const [cartItems, setCartItems] = useState([]); // Initialize cartItems as an empty array

  const renderView = () => {
    switch (view) {
      case 'catalog':
        return <Catalog setView={setView} />;
      case 'cart':
        return <Cart cartItems={cartItems} setView={setView} />;
      default:
        return <Catalog setView={setView} />;
    }
  };

  return (
    <div>
      {renderView()}
    </div>
  );
};

export default ParentComponent;
