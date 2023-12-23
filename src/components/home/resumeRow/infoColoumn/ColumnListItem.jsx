import React from "react";

function ColumnListItem(props) {
  const { title, subtitle, description } = props;
  return (
    <div>
      <h2>{title}</h2>
      <p style={{ marginTop: "8px" }}>{subtitle}</p>
      <p style={{ marginTop: "12px" }}>{description}</p>
    </div>
  );
}

export default ColumnListItem;
