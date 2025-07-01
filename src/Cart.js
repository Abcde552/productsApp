import React, { useState, useEffect, useContext } from "react";
import "./Cart.css";
import { EcomContext } from "./context";

const Carts = () => {
  const [carts, setCarts] = useState([]); // State to store the fetched carts data
  const [loading, setLoading] = useState(true); // State to track the loading status
  const [error, setError] = useState(null); // State to track any errors
  const {quantity, setQuantity} = useContext(EcomContext)

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCarts([{ id: 1, userId: 1, products: JSON.parse(storedCart) }]);
    }
    setLoading(false);
  }, []);

  const increaseQuantity = (cartId, productId) => {
    setCarts((prevCarts) => {
      const updatedCarts = prevCarts.map((cart) =>
        cart.id === cartId
          ? {
              ...cart,
              products: cart.products.map((product) =>
                product.id === productId
                  ? { ...product, quantity: product.quantity + 1 }
                  : product
              ),
            }
          : cart
      );

      localStorage.setItem("cart", JSON.stringify(updatedCarts[0].products));
      return updatedCarts;
    });
  };

  const decreaseQuantity = (cartId, productId) => {
    setCarts((prevCarts) => {
      const updatedCarts = prevCarts.map((cart) =>
        cart.id === cartId
          ? {
              ...cart,
              products: cart.products
                .map((product) =>
                  product.id === productId
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
                )
                .filter((product) => product.quantity > 0),
            }
          : cart
      );

      localStorage.setItem("cart", JSON.stringify(updatedCarts[0].products));
      return updatedCarts;
    });
  };

  if (loading) return <div className="loading">Loading...</div>;

  if (error) return <div className="error">Error: {error}</div>;

  // Add this return statement to render JSX
  return (
    <div className="cart-container">
      {carts.length === 0 ? (
        <p>No cart data available</p>
      ) : (
        carts.map((cart) => {
          const totalQuantity = cart.products.reduce(
            (sum, product) => sum + product.quantity,
            0
          );
          setQuantity(totalQuantity)

          return (
            <div key={cart.id} className="cart-card">
              <h2 className="cart-id">Cart ID: {cart.id}</h2>
              <p className="user-id">User ID: {cart.userId}</p>
              <h3 className="items-header">Items:</h3>
              <ul className="items-list">
                {cart.products.map((product) => (
                  <li key={product.id} className="product-item">
                    <p className="product-id">Product ID: {product.id}</p>

                    <p className="quantity">
                      Quantity: {product.quantity}
                      <br />
                      <button
                        className="quantity-btnMinus"
                        onClick={() => decreaseQuantity(cart.id, product.id)}
                      >
                        -
                      </button>
                      <span> - </span>
                      <button
                        className="quantity-btnPlus"
                        onClick={() => increaseQuantity(cart.id, product.id)}
                      >
                        +
                      </button>
                    </p>
                  </li>
                ))}
              </ul>

              <p>Total items in cart: {quantity}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Carts;
