import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Header.css";

export default function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="Logo" />
      </Link>
      <div className="header-links">
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}
