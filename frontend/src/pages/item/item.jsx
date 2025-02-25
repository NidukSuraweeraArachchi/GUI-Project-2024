import React, { useState, useEffect } from 'react';
import Navbar from './../../components/foodnavbar/foodnav'; // Import the Navbar component
import './item.css';

const Item = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(4);
  const [counts, setCounts] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state

  // Fetch products from the backend API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/item');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError('Failed to fetch products. Please try again later.');
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false); // Stop loading after fetch attempt
      }
    };

    fetchProducts();
  }, []);

  const loadMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 2);
  };

  const increment = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 0) + 1,
    }));
  };

  const decrement = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: prevCounts[id] > 0 ? prevCounts[id] - 1 : 0,
    }));
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <div>
      <Navbar cartCount={cartItems.length} />
      <div className="container">
        <div className="product-list">
          <section className="product-section">
            <div className="section-header">
              <h2>Dairy Products & Eggs</h2>
              <button className="see-all-button">See all</button>
            </div>

            {/* Display Loading or Error Messages */}
            {loading && <p>Loading products...</p>}
            {error && <p>{error}</p>}

            {/* Product Grid */}
            <div className="product-grid">
              {products.slice(0, visibleProducts).map((product) => (
                <div className="product-card" key={product.id}>
                  <img src={product.image} alt={product.title} className="product-image" />
                  <div className="quick-view">Quick view</div>
                  <div className="product-details">
                    <div className="product-name">{product.title}</div>
                    <div className="product-price">LKR {product.price}</div>

                    <div className="item-counter">
                      <button onClick={() => decrement(product.id)}>-</button>
                      <span>{counts[product.id] || 0}</span>
                      <button onClick={() => increment(product.id)}>+</button>
                    </div>
                  </div>
                  <button onClick={() => addToCart(product)}>Add to cart</button>
                </div>
              ))}
            </div>

            <div className="see-more-container">
              <button className="see-more-button" onClick={loadMore}>
                See More
              </button>
            </div>
          </section>
        </div>

        {/* Fixed Cart Section */}
        <div className="cart-section">
          <h3>Your Cart</h3>
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  <div className="cart-item">
                    <img src={item.image} alt={item.title} className="cart-item-image" />
                    <div className="cart-item-details">
                      <span>{item.title}</span>
                      <span>LKR {item.price}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
