import React from "react";
import Home from "./Components/Home/Home";
import "./Navbar.css";

export default function navbar() {
  return (
    <div>
      <nav className="main-nav">
        <div className="logo">
          <img src="instalogo.png" alt="" className="instalogo" />
        </div>
        <div className="search">
          <i class="fas fa-search si"></i>
          <input type="text" placeholder="Search"/>
          
        </div>
        <div className="iconbar">
        <ul className="list">
          <li className="listing"><a href="#"><i class="fas fa-home sizing"></i></a></li>
          <li className="listing"><a href="#"><i class="fab fa-facebook-messenger sizing"></i></a></li>
          <li className="listing"><a href="#"><i class="far fa-plus-square sizing"></i></a></li>
          <li className="listing"><a href="#"><i class="far fa-compass sizing"></i></a></li>
          <li className="listing"><a href="#"></a><i class="fas fa-heart sizing"></i></li>
          <li className="p-icon"><a href=""><img src="companylogo.jpg" alt="logo" className="profile"/></a></li>
        </ul>
        </div>
      </nav>
    </div>
  );
}
