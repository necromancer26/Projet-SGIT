import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
// import "./CustomNavbar.css";
import { ReactComponent as LogoSgit } from "../../SGITlogo.svg";

export default function CustomNavbar() {
  return (
    <Navbar>
      <NavItem to="/" title={"Acceuil"} />
      <NavItem title={"Logiciels "} icon={<i class="fas fa-caret-down"></i>}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
      <NavItem to="/about" title={"A propos"} />
      <NavItem to="/contact" title={"Contact"} />
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <h1 className="logo">
        <LogoSgit />
      </h1>
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}
function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <Link to={props.to} onClick={() => setOpen(!open)}>
        <h5 className="icon-button">{props.title}</h5>
        {props.icon}
      </Link>
      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <Link
        to={props.to}
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        {props.children}
      </Link>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem to="./logiciel">Logiciels</DropdownItem>
          <DropdownItem to="./EnCour">
            Logiciels en cour de réalisation
          </DropdownItem>
          <DropdownItem to="./video">Vidéos instructives</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
export { CustomNavbar };
