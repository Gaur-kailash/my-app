import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';

export default function NavBar() {
  const theme = () => {
    let theme = document.getElementById("theme");
    let nav = document.getElementsByTagName("nav")[0];
    let navI = document.getElementById("theme");
    let txt = document.getElementById("txt");
    let links = Array.from(document.getElementsByClassName('links'));
    let btn = Array.from(document.getElementsByClassName('btn'));
      if (theme.classList.contains("fa-moon")) {
        theme.classList.remove("fa-moon");
        theme.classList.add("fa-circle-half-stroke");
        nav.style.backgroundColor = "#212121";
        nav.style.color = "white";
        navI.style.color = "white";
        document.body.style.backgroundColor = "rgb(31 33 70)";
        document.body.style.color = "white";
        // txt.style.backgroundColor="#363636";
        // txt.style.color="white";
        links.forEach((e)=>{
          e.style.color="white";
        })
        btn.forEach((e)=>{
          e.style.color="white";
          e.style.backgroundColor="green"
        })
      } else {
        theme.classList.add("fa-moon");
        theme.classList.remove("fa-circle-half-stroke");
        nav.style.backgroundColor = "rgb(209, 208, 208)";
        nav.style.color = "black";
        navI.style.color = "black";
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        // txt.style.backgroundColor="white";
        // txt.style.color="black";
        links.forEach((e)=>{
          e.style.color="black";
        })
        btn.forEach((e)=>{
          e.style.color="white";
          e.style.backgroundColor="rgb(56, 56, 255)";

        })
      }
  };
  return (
    <nav className="nav flex">
      <div className="flex">
        <Link className="links" to="/">TextUtils |</Link>
        <Link className="links" to="/">Home</Link>
        <Link className="links" to="/about">About</Link>
      </div>
      <i className="fa fa-moon" id="theme" onClick={theme}></i>
    </nav>
  );
}
