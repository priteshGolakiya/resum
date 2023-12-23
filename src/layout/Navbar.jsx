import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/layout/Navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuClicked = () => {
    document.body.classList.toggle(styles.open);
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles["navigation-menu"]}>
      <div
        className={styles["navigation-menu__overlay"]}
        onClick={toggleMenuClicked}
      ></div>
      <button
        type="button"
        className={styles["hamburger-menu"]}
        onClick={toggleMenuClicked}
      >
        <span className="material-icons" id="open-icon">
          menu
        </span>
        <span className="material-icons" id="close-icon">
          close
        </span>
      </button>
      <h1 className={styles["site-identity-logo"]}>Bhautik Golakiya</h1>
      <section className={styles["navigation-menu__labels"]}>
        <NavLink
          className={styles["link"]}
          to="/"
          exact
          activeClassName={styles.active}
        >
          Home
        </NavLink>
        <NavLink
          className={styles["link"]}
          to="/about"
          activeClassName={styles.active}
        >
          About
        </NavLink>
        <NavLink
          className={styles["link"]}
          to="/resume"
          activeClassName={styles.active}
        >
          Resume
        </NavLink>
        <NavLink
          className={styles["link"]}
          to="/services"
          activeClassName={styles.active}
        >
          Services
        </NavLink>
        <NavLink
          className={styles["link"]}
          to="/portfolio"
          activeClassName={styles.active}
        >
          Portfolio
        </NavLink>

        <NavLink
          className={styles["link"]}
          to="/contact"
          activeClassName={styles.active}
        >
          Contact Us
        </NavLink>
      </section>
    </nav>
  );
};

export default Navbar;
