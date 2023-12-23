import React from "react";
import styles from "../styles/about/About.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.containerSelf}>
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Second section */}
      <div className={styles.containerSecond}>
        <div className={styles.img}>
          <img src="/assets/img/about.jpg" alt="Illustration of the designer" />
        </div>
        <div className={styles.content}>
          <div className={styles.containerSelf}>
            <h2>About</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className={styles.details}>
            <div className="profile-card">
              <div className="left-side">
                <div className={styles.containerSelf}>
                  <h1>Illustrator & UI/UX Designer</h1>
                  <h2>Personal Information</h2>
                </div>
                <div className={styles.personalInformation}>
                  <div
                    className={`${styles.personalInformationLeft} ${styles.half}`}
                  >
                    <p>Birthday: 1 May 1995</p>
                    <p>Website: www.example.com</p>
                    <p>Phone: +123 456 7890</p>
                    <p>City: New York, USA</p>
                  </div>
                  <div
                    className={`${styles.personalInformationRight} ${styles.half}`}
                  >
                    <p>Age: 30</p>
                    <p>Degree: Master</p>
                    <p>Email: email@example.com</p>
                    <p>Freelance: Available</p>
                  </div>
                </div>
              </div>
              <div className="right-side">
                <p>
                  Officiis eligendi itaque labore et dolorum mollitia officiis
                  optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                  accusantium dolor incidunt officia tempore. Et eius omnis.
                  Cupiditate ut dicta maxime officiis quidem quia. Sed et
                  consectetur qui quia repellendus itaque neque. Aliquid amet
                  quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis
                  culpa magni laudantium dolores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third section */}
    </section>
  );
};

export default About;
