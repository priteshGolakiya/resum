import React from "react";
import styles from "../../styles/home/Hero.module.css";

function Hero({ image, alt, title, subtitle }) {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.imageContainer}`}>
        <img src={image} alt={alt} />
      </div>
      <div className={`${styles.overlay}`} />
      <div className={`${styles.contentContainer}`}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <button style={{ marginTop: "32px" }}>Print Resume</button>
      </div>
    </div>
  );
}

export default Hero;
