import React from "react";
import Card from "../../common/Card";
import WhoAmI from "./WhoAmI";
import PersonalInfo from "./PersonalInfo";
import MyExpertise from "./myExpertise/MyExpertise";

function AboutRow() {
  return (
    <div className="row" style={{ marginTop: "20px" }}>
      <Card title={"Who Am I?"} content={<WhoAmI />} />
      <Card title={"Personal Info"} content={<PersonalInfo />} />
      <Card title={"My Expertise"} content={<MyExpertise />} />
    </div>
  );
}

export default AboutRow;
