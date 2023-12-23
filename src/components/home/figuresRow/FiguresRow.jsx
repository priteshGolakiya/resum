import React from "react";
import { figures } from "../../../data/data";
import FigureListItem from "./FigureListItem";

function FiguresRow() {
  return (
    <div
      style={{
        backgroundColor: "#212121",
        padding: "36px 0px",
        color: "white",
      }}
    >
      <div className="row">
        {figures.map((item, index) => (
          <FigureListItem
            key={index}
            icon={item.icon}
            title={item.title}
            figure={item.figure}
          />
        ))}
      </div>
    </div>
  );
}

export default FiguresRow;
