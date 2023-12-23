import React, { useState } from "react";
import { portfolioNav } from "../../../data/data";

function PortfolioRow() {
  const [selected, setSelected] = useState(0);

  console.log(selected);

  return (
    <div
      style={{
        padding: "36px",
        display: "grid",
        gridTemplateRows: "auto 1fr",
        gap: "36px",
      }}
    >
      <h2 className="row-title">Portfolio</h2>
      <nav style={{}}>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "16px",
            justifyContent: "center",
          }}
        >
          {portfolioNav.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => setSelected(index)}
                style={{
                  cursor: "pointer",
                  color: index === selected ? "#07a5cc" : "black",
                }}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
      </nav>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gridAutoRows: "240px",
          gap: "1rem",
        }}
      >
        {portfolioNav[selected].images.map((item, index) => {
          return (
            <div style={{ overflow: "hidden" }}>
              <img
                key={index}
                src={item}
                alt="img"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PortfolioRow;
