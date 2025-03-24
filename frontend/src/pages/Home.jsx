import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Prakruti Parikshan</h1>
      <p>Discover your body type based on Ayurvedic principles.</p>
      <div style={{ marginTop: "20px" }}>
        <Link to="/login" style={{ marginRight: "15px", textDecoration: "none", color: "blue" }}>
          Login
        </Link>
        <Link to="/signup" style={{ textDecoration: "none", color: "blue" }}>
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Home;
