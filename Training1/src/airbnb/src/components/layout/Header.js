import React, { useState, useEffect } from "react";
import "./Header.css";
export default function Header() {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", ()=>{setScrollY(window.scrollY)} )
    console.log('start listen')
    return ()=>{
      window.removeEventListener("scroll",()=>{setScrollY(0)})
    }
  }, [])

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
