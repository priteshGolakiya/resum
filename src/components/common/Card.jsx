// Card.jsx

import React from "react";
import styles from "../../styles/common/Card.module.css";

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.titleContainer}>
        <h3>{props.title}</h3>
      </div>
      <div className={styles.contentContainer}>{props.content}</div>
    </div>
  );
}

export default Card;
