import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/home/Home.module.css";

function Home() {
  return (
    <>
      <section id="hero" className={`d-flex align-items-center ${styles.hero}`}>
        <div
          className={`container d-flex flex-column align-items-center ${styles.container}`}
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <h1 className={styles.heroTitle}>Bhautik Golakiya</h1>
          <h2 className={styles.heroSubtitle}>
            I'm a professional UI/UX Designer.
          </h2>
          <Link to="/about" className={`btn-about ${styles.btnAbout}`}>
            About Me
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
