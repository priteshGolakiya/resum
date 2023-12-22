import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/layout/Navbar.css";

function Navbar() {
  return (
    <header className="fixed-top header">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="" style={{ display: "flex" }}>
          <h1 className="logo me-auto me-lg-0">Bhutik</h1>

          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="navLink"
                activeClassName="active"
                to="/"
                exact
                style={{ transition: "all 0.3s ease-in-out" }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="navLink"
                activeClassName="active"
                to="/about"
                style={{ transition: "all 0.3s ease-in-out" }}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="navLink"
                activeClassName="active"
                to="/resume"
                style={{ transition: "all 0.3s ease-in-out" }}
              >
                Resume
              </NavLink>
            </li>
            <li className="dropdown">
              <NavLink
                href="#"
                className="navLink dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/services/service1">
                    Service 1
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/services/service2">
                    Service 2
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/services/service3">
                    Service 3
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink
                className="navLink"
                activeClassName="active"
                to="/portfolio"
                style={{ transition: "all 0.3s ease-in-out" }}
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="navLink"
                activeClassName="active"
                to="/contact"
                style={{ transition: "all 0.3s ease-in-out" }}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <i className="bi bi-list mobile-nav-toggle"></i>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
