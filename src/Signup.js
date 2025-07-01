import React, { useState,useContext } from "react";
import "./Signup.css";
import { EcomContext } from "./context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
 const { setEE,setPP } = useContext(EcomContext);

  const handleSubmit = (e) => {
    e.preventDefault();

  if (password.length < 8) alert("Password must be at least 8 characters.");
  else if (!/[A-Z]/.test(password))
    alert("Include at least one uppercase letter.");
  else if (!/[a-z]/.test(password))
    alert("Include at least one lowercase letter.");
  else if (!/\d/.test(password)) alert("Include at least one digit.");
  else if (!/[@#$!%*?&]/.test(password))
    alert("Include at least one special character.");
  else if (/\s/.test(password)) alert("No spaces allowed.");
  else {
    // valid – do your logic
  

    
  

    setEE( email);
    setPP( password);
    
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    
    navigate("/login"); 
    
    setEmail("");
    setPassword("");
  }
  
  };

  

  return (
    <div className="wrapper">
      <div className="login-container">
        <div className="Heading">
          <h1>MY-React-APP</h1>
        </div>

        <div className="login-box">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-btn">
              Register Now
            </button>
          </form>
          <p>{email}</p> {password}
        </div>
      </div>
    </div>
  );
};

export default Login;
