import React from "react";
import styles from "../styles/layout/Footer.module.css";

function Footer() {
  return (
    <footer id={`${styles.container}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.copyright}`}>
          &copy; Copyright
          <strong>
            <span>Bhautik</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
