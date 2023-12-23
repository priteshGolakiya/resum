import React, { Fragment } from "react";
import ColumnListItem from "./ColumnListItem";
import "../../../../styles/common/infoColumn/infoColoumn.css";

function InfoColumn(props) {
  return (
    <div style={{ display: "grid", gap: "24px" }}>
      {props.data.map((item, index) => (
        <Fragment key={index}>
          <ColumnListItem
            title={item.title}
            subtitle={item.subtitle}
            description={
              <ul>
                {Array.isArray(item.description) ? (
                  item.description.map((bullet, bulletIndex) => (
                    <li key={bulletIndex}>{bullet}</li>
                  ))
                ) : (
                  <li>{item.description}</li>
                )}
              </ul>
            }
          />
          {index < props.data.length - 1 && <hr />}
        </Fragment>
      ))}
    </div>
  );
}

export default InfoColumn;
