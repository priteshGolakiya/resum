import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "../styles/layout/Navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenuClicked = () => {
    document.body.classList.toggle(styles.open);
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    document.body.classList.remove(styles.open);
    setIsMenuOpen(false);
  };

  const handleNavLinkClick = (path) => {
    // Close the menu with a slight delay
    setTimeout(() => {
      closeMenu();
    }, 300);

    // Navigate to the new page after a delay
    setTimeout(() => {
      navigate(path);
    }, 500);
  };

  return (
    <nav className={styles["navigation-menu"]}>
      <div
        className={styles["navigation-menu__overlay"]}
        onClick={closeMenu}
      ></div>
      <button
        type="button"
        className={styles["hamburger-menu"]}
        onClick={toggleMenuClicked}
      >
        <span className="material-icons" id="open-icon">
          menu
        </span>
      </button>
      <h1
        className={styles["site-identity-logo"]}
        onClick={() => handleNavLinkClick("/")}
      >
        Bhautik Golakiya
      </h1>
      <section className={styles["navigation-menu__labels"]}>
        <NavLink
          className={styles["link"]}
          to="/"
          exact
          activeClassName={styles.active}
          onClick={() => handleNavLinkClick("/")}
        >
          Home
        </NavLink>
        <NavLink
          className={styles["link"]}
          to="/about"
          activeClassName={styles.active}
          onClick={() => handleNavLinkClick("/about")}
        >
          About
        </NavLink>
        <NavLink
          className={styles["link"]}
          to="/resume"
          activeClassName={styles.active}
          onClick={() => handleNavLinkClick("/resume")}
        >
          Resume
        </NavLink>
        <NavLink
          className={styles["link"]}
          to="/portfolio"
          activeClassName={styles.active}
          onClick={() => handleNavLinkClick("/portfolio")}
        >
          Portfolio
        </NavLink>
        <NavLink
          className={styles["link"]}
          to="/contact"
          activeClassName={styles.active}
          onClick={() => handleNavLinkClick("/contact")}
        >
          Contact Us
        </NavLink>
      </section>
    </nav>
  );
};

export default Navbar;
