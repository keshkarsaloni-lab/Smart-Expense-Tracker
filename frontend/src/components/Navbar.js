import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        background: "#4f46e5",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "white" }}>Smart Expense Tracker</h2>

      <div style={{ display: "flex", gap: "15px" }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/login" style={linkStyle}>Login</Link>
        <Link to="/register" style={linkStyle}>Register</Link>
        <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
      </div>
    </nav>
  );
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
};

export default Navbar;