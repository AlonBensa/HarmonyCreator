import React from "react";
import "./Navbar.css";

function Navbar() {
  const navbarButtons = [
    "Make songs",
    "My songs",
    "Users songs",
    "Users profiles",
    "Log In",
    "Sign Up",
  ];

  return (
    <header>
      <a href="/" className="logo">
        Harmony Creator
      </a>
      <nav className="navbar">
        {navbarButtons.map((button, index) => (
          <a href={button} key={index}>
            {button}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
