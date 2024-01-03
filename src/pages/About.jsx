import React from "react";
import styles from "../styles/about/About.module.css";
import ProgressBar from "../components/common/ProgressBar";

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
          <img src="/assets/picofme.jpg" alt="Illustration of the designer" />
        </div>
        <div className={styles.content}>
          <div className={styles.containerSelf}>
            <h2>My Self</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className={styles.details}>
            <div className="profile-card">
              <div className="left-side">
                <div className={styles.containerSelf}>
                  <span>Illustrator & UI/UX Designer</span>
                  <span>Personal Information</span>
                </div>
                <div className={styles.personalInformation}>
                  <div
                    className={`${styles.personalInformationLeft} ${styles.half}`}
                  >
                    <p>Birthday: 1 May 1995</p>
                    {/* <p>Website: www.example.com</p> */}
                    <p>Phone: +44 07767856891</p>
                    <p>City: New York, USA</p>
                  </div>
                  <div
                    className={`${styles.personalInformationRight} ${styles.half}`}
                  >
                    <p>Age: 30</p>
                    <p>Degree: Master</p>
                    <p>Email: bhautik.golakiya98@gmail.com </p>
                    {/* <p>Freelance: Available</p> */}
                  </div>
                </div>
              </div>
              <div className="right-side">
                <p>
                  ❖ I learned many things like creating animation prototypes in
                  Figma, components, Masking, overflow scrolling, interactions,
                  etc.
                  <br />
                  ❖ Design conceptual wireframes, high-fidelity mock-ups,
                  information architecture diagrams, interaction specifications,
                  and functional prototypes
                  <br />❖ Reviewed project goals and objectives on a monthly
                  basis with the project manager and design team.
                  <br />
                  ❖ During this time period, I have gained so much knowledge and
                  tools knowledge like Adobe Photoshop, Adobe Illustrator,
                  Figma, Zeplin, Adobe premiere pro, and much more.
                  <br />❖ Creating user flows, wireframes, prototypes, and
                  mockups.
                  <br />
                  ❖ As a UX Design Intern, I collaborated with a team that
                  defines and designs user interfaces, systems, and interaction,
                  visual, and motion design patterns.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third section */}
      <div className={styles.progressBarMain}>
        <div className={styles.progressBar}>
          <div className={`${styles.progressBarHalf}`}>
            <ProgressBar title={"Designing"} progress={"100"} />
            <ProgressBar title={"Game 2D Design"} progress={"100"} />
            <ProgressBar title={"Video editing skills"} progress={"100"} />
          </div>
          <div className={`${styles.progressBarHalf}`}>
            <ProgressBar title={"Web Design"} progress={"80"} />
            <ProgressBar title={"Microsoft Office"} progress={"80"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
