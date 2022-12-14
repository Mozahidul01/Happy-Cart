import React from "react";
import logo from "../../images/logo.svg";
import "./Header.css";

export default function Header() {
  return (
    <nav className="header">
      <a href="#home">
        <img className="logo" src={logo} alt="Logo" />
      </a>
      <div className="header-links">
        <a href="/shop">Shop</a>
        <a href="/orders">Orders</a>
        <a href="/inventory">Inventory</a>
        <a href="/about">About</a>
      </div>
    </nav>
  );
}
