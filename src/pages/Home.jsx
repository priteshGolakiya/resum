import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/home/Home.module.css";
import { TypeAnimation } from "react-type-animation";

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
            <div className="textAnimation"></div>
            <TypeAnimation
              sequence={[
                "I'm",
                500,
                "I'm A Professional",
                500,
                "I'm A Professional UI/UX",
                500,
                "I'm A Professional UI/UX Designer.",
                500,
                "I'm A Professional UI/UX",
                500,
                "I'm A Professional",
                500,
                "I'm ",
                500,
                "",
                500,
              ]}
              // style={{ fontSize: "2em" }}
              repeat={Infinity}
            />
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
