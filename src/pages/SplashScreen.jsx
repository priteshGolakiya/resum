// SplashScreen.js
import React, { useEffect, useState } from "react";
import styles from "../styles/home/SplashScreen.module.css";
import Home from "./Home";

function SplashScreen({ onSplashComplete }) {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const loadingBar = document.querySelector(`.${styles.loadingbar}`);
    const loadingBox = document.querySelector(`.${styles.loadingBox}`);
    const splashScreen = document.querySelector(`.${styles.splashScreen}`);
    const loadingCircle = document.querySelector(`.${styles.loadingCircle}`);
    const body = document.querySelector("body");

    const startAnimations = () => {
      setTimeout(() => {
        if (loadingBar) loadingBar.style.left = "0";
      }, 1500);

      setTimeout(() => {
        if (loadingBox) loadingBox.style.opacity = "1";
      }, 500);

      setTimeout(() => {
        if (splashScreen) splashScreen.style.top = "-100%";
      }, 4500);

      setTimeout(() => {
        if (loadingCircle) loadingCircle.style.opacity = "0";
      }, 4500);

      setTimeout(() => {
        if (body) {
          body.classList.add("visibleSplash");
        }
        setAnimationComplete(true);
        onSplashComplete();
      }, 3500);
    };

    startAnimations();

    return () => {
      // Cleanup functions if needed
    };
  }, [onSplashComplete]);

  return (
    <>
      {animationComplete ? (
        <Home />
      ) : (
        <div className={styles.splashBody}>
          <div className={styles.splashScreen}>
            <div className={styles.loadingContainer}>
              <div className={styles.loadingBox}>
                <img
                  src="https://vignette.wikia.nocookie.net/borderlands/images/4/42/Vault_logo.png/revision/latest?cb=20100114181536"
                  alt="Splash Logo"
                  className={styles.splashLogo}
                />
                <div className={styles.loadingBarContainer}>
                  <div className={styles.loadingbar}></div>
                </div>

                <div className={styles.loadingCircle}>
                  <div className={styles.circleOuter}></div>
                  <div className={styles.circleLoader}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.splashBehind}></div>
        </div>
      )}
    </>
  );
}

export default SplashScreen;
