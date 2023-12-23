import React from "react";

function FigureListItem({ icon, figure, title }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
      }}
    >
      <div>{icon}</div>
      <hr style={{ height: "95px" }} />
      <div>
        <h2 style={{ color: "#07a5cc", fontSize: "2.5rem" }}>{figure}</h2>
        <p style={{ marginTop: "8px" }}>{title}</p>
      </div>
    </div>
  );
}

export default FigureListItem;
