import React from "react";
import "./Navbar.css";
import navlogo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
    <h1>Admin Panel</h1>
      <img src={navlogo} alt="" className="nav-logo" />
    </div>
  );
};
export default Navbar;
