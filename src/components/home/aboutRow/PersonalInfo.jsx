import React from "react";
import { personalInfo } from "../../../data/data";
import { capitalize } from "../../../utils/textFormatting";

function PersonalInfo() {
  // [["key", "value"], [], []];
  return (
    <div>
      <ul>
        {Object.entries(personalInfo).map((item, index) => {
          console.log(item);
          return (
            <li key={index}>
              {capitalize(item[0])} : {item[1]}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PersonalInfo;
