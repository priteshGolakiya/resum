import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../../../../styles/home/MyExpertiseListItem.module.css";

function MyExpertiseListItem({ icon, title, description }) {
  return (
    <div className={`${styles.listItemContainer}`}>
      <div>
        <FontAwesomeIcon color="#62d4f2" size="lg" icon={icon} />
      </div>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default MyExpertiseListItem;
