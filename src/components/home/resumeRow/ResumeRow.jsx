import React from "react";
import Card from "../../common/Card";
import Skills from "./Skills";
import InfoColumn from "./infoColoumn/InfoColumn";
import { education, expertise } from "../../../data/data";

function ResumeRow() {
  return (
    <div>
      <h2 className="row-title">Resume</h2>
      <div className="row">
        <Card title="Expertise" content={<InfoColumn data={expertise} />} />
        <Card title="Education" content={<InfoColumn data={education} />} />
        <Card title="Skills" content={<Skills />} />
      </div>
    </div>
  );
}

export default ResumeRow;
