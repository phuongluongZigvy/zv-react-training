import React from "react";
import "./Header.css";
export default function Header() {
  const changeColorNavbar = () => {
    if (window.scrollY >= 50) {
      console.log("scroll");
      document.querySelector(".header").classList.add("white_header");
    } else {
      document.querySelector(".header").classList.remove("white_header");
    }
  };

  window.addEventListener("scroll", changeColorNavbar);

  return (
    <div className="header">
      <h2 className="logo">Airbnb</h2>
      <div className="tabs">
        <h4>Places to stay</h4>
        <h4>Experiences</h4>
        <h4>Online Experiences</h4>
      </div>
    </div>
  );
}
