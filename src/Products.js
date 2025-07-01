import React, { useState, useEffect } from "react";
import "./Products.css";
import { useNavigate } from "react-router-dom";



const AllProducts = () => {

  const navigate = useNavigate();
  const [produ,setProdu]=useState([])
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  


  const handleProductClick = (product) => {
    console.log(product.id);
    navigate(`/product/${product.id}`);
  };


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="all-products-container">
      <h1 className="page-title">🛍️ Explore Our Products</h1>

      {loading && <p className="status-text">Loading products...</p>}
      {error && <p className="status-text error-text">{error}</p>}

      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p className="product-desc">
              {product.description.substring(0, 80)}...
            </p>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <button
              className="view-btn"
              onClick={() => handleProductClick(product)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
