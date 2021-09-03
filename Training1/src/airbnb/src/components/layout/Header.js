import React, { useState } from "react";
import "./Header.css";
export default function Header() {

  const [scrollY, setScrollY] = useState(0);

  window.addEventListener("scroll", ()=>{setScrollY(window.scrollY)} )

  return (
    <div className={scrollY>=50?'header white_header':'header'}>
      <h2 className="logo">Airbnb</h2>
      <div className="tabs">
        <h4>Places to stay</h4>
        <h4>Experiences</h4>
        <h4>Online Experiences</h4>
      </div>
    </div>
  );
}
