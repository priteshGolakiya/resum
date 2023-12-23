import { faAmbulance } from "@fortawesome/free-solid-svg-icons";
import React, { Fragment } from "react";
import MyExpertiseListItem from "./MyExpertiseListItem";

function MyExpertise() {
  const arrListItems = [
    {
      icon: faAmbulance,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      icon: faAmbulance,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      icon: faAmbulance,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet.",
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {arrListItems.map((item, index) => (
        <Fragment key={index}>
          <MyExpertiseListItem
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
          {index + 1 < arrListItems.length && <hr />}
        </Fragment>
      ))}
    </div>
  );
}

export default MyExpertise;
