import React, { useState } from "react";
import { ReactComponent as LogoSgit } from "../../SGITlogo.svg";
import { Link } from "react-router-dom";
import "./NeoNavbar.css";
// import { Link } from "react-router-dom";
export default function NeoNavbar() {
  const [toggle, setToggle] = useState(false);
  const [clicked, setClicked] = useState(true);
  return (
    <nav className="neo-navbar">
      <div className="logo">
        <Link to="/">
          <LogoSgit />
        </Link>
      </div>

      <div className="navbar-nav-container">
        <i
          class="fas fa-bars dropdown-button"
          onClick={() => setClicked(!clicked)}
        ></i>
        <ul className={`neo-navbar-nav ${clicked && "none"} `}>
          <Link to="/">
            <li>Acceuil</li>
          </Link>
          <li
            onClick={() => setToggle(!toggle)}
            // onMouseLeave={() => setToggle(false)}
          >
            <Link to="#">Logiciels</Link> <i class="fas fa-caret-down"></i>
            {toggle && (
              <ul className="neo-navbar-dropdown">
                <Link to="/logiciel">
                  <li>Logiciels</li>
                </Link>
                <Link to="/EnCour">
                  <li>Logiciels en cour</li>
                </Link>
                <Link to="/video">
                  <li>Vidéos instructives</li>
                </Link>
              </ul>
            )}
          </li>
          <Link to="/about">
            <li>A propos</li>
          </Link>{" "}
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/login">
            <li>
              <i class="fas fa-sign-in-alt"></i>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
