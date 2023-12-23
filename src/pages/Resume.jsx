import React from "react";
import InfoColumn from "../components/home/resumeRow/infoColoumn/InfoColumn";
import Card from "../components/common/Card";
import { education, experience } from "../components/data/data";
import "../styles/resume/resume.css";
function Resume() {
  return (
    <div className="resume">
      <Card
        title="RESUME"
        content={
          <>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
              possimus tempore quis quibusdam? Accusantium officia cum, tempore,
              adipisci veritatis nostrum, aperiam consequuntur tenetur quidem
              fugiat ut id quaerat impedit hic?
            </p>
          </>
        }
      />

      <div className="try">
        <div className="tryLeft">
          <Card title="Education" content={<InfoColumn data={education} />} />
        </div>
        <div className="tryRight">
          <Card
            title="Professional Experience"
            content={<InfoColumn data={experience} />}
          />
        </div>
      </div>
    </div>
  );
}

export default Resume;
