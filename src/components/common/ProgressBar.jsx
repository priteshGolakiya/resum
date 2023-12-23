import React from "react";
import styles from "../../styles/common/ProgressBar.module.css";

function ProgressBar({ title, progress }) {
  return (
    <div className={`${styles.progressContainer}`}>
      <p>{title}</p>
      <progress value={`${progress}`} max="100">
        {progress}%
      </progress>
    </div>
  );
}

export default ProgressBar;
