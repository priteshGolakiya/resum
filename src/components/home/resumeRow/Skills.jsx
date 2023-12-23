import React from "react";
import ProgressBar from "../../common/ProgressBar";

function Skills() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "16px",
        width: "100%",
      }}
    >
      <ProgressBar title="HTML5 & CSS3" progress={80} />
      <ProgressBar title="React.js" progress={80} />
      <ProgressBar title="Node.js & Express.js" progress={60} />
      <ProgressBar title="MongoDB" progress={60} />
    </div>
  );
}

export default Skills;
