import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbars from "./Navbars";
import Home from "./Home";
import DetailedView from "./DetailedView";
import Cart from "./Cart";
import Products from "./Products";
import Signup from "./Signup";
import Login from "./Login";
import ProtectedRoute from "./Protectedroute";
import { EcomContext } from "./context";
// import { EcomProvider } from "./context";

const App = () => {
  // const login = true
  const { login } = useContext(EcomContext);

  return (
    <BrowserRouter>
      {/* <EcomProvider> */}
      <Navbars />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Totalproducts" element={<Products />} />
        <Route path="/product/:id" element={<DetailedView />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
