import React, { useState } from 'react';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: 'Product 1', price: 29.99 },
    { id: 2, name: 'Product 2', price: 19.99 },
    { id: 3, name: 'Product 3', price: 39.99 }
  ];

  const addToCart = (product) => {
    if (!cart.find(item => item.id === product.id)) {
      setCart([...cart, product]);
    } else {
      alert("Item already in cart!");
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping Cart</h1>

        <div className="content">
          <div className="product-list">
            {products.map(product => (
              <div className="product-card" key={product.id}>
                <div className="product-image">
                  <p>Image Placeholder</p>
                </div>
                <h2>{product.name}</h2>
                <p>${product.price.toFixed(2)}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            ))}
          </div>

          <div className="cart-info">
            <h2>Your Cart</h2>
            {cart.length > 0 ? (
              <ul>
                {cart.map((item, index) => (
                  <li key={index}>
                    {item.name} - ${item.price.toFixed(2)}
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Your cart is empty</p>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
