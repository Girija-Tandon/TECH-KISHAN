import React, { useState } from "react";
import "../styles/marketplace.css";

const products = [
  { id: 1, name: "Organic Tomatoes", price: "₹50/kg", image: "https://via.placeholder.com/100" },
  { id: 2, name: "Fresh Carrots", price: "₹40/kg", image: "https://via.placeholder.com/100" },
  { id: 3, name: "Green Spinach", price: "₹30/bundle", image: "https://via.placeholder.com/100" },
  { id: 4, name: "Farm Fresh Milk", price: "₹60/ltr", image: "https://via.placeholder.com/100" },
];

const Marketplace = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
  };

  return (
    <section className="marketplace">
      <h2>🛒 Agri Marketplace</h2>
      <p>Buy & Sell high-quality organic agricultural products.</p>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button className="buy-btn" onClick={() => handleBuyNow(product)}>🛍 Buy Now</button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="modal">
          <div className="modal-content">
            <h3>Confirm Purchase</h3>
            <p>Are you sure you want to buy <strong>{selectedProduct.name}</strong> for {selectedProduct.price}?</p>
            <button className="confirm-btn" onClick={() => alert("Purchase Successful!")}>✅ Confirm</button>
            <button className="cancel-btn" onClick={() => setSelectedProduct(null)}>❌ Cancel</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Marketplace;

