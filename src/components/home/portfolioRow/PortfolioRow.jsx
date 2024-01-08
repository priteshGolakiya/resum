import React, { useState, useEffect } from "react";
import { portfolioNav } from "../../data/data";
import "../../../styles/home/imageMap/ImageMap.css";

function PortfolioRow() {
  const [selected, setSelected] = useState(0);

  const renderImages = () => {
    if (selected === null) {
      return portfolioNav.flatMap((item) => item.images);
    } else {
      return portfolioNav[selected]?.images || [];
    }
  };

  const handleImageClick = (link) => {
    // Redirect to the specified link when an image is clicked
    window.location.href = link;
  };

  return (
    <div className="portfolio-row">
      <h2 className="row-title">PORTFOLIO</h2>
      <nav>
        <ul>
          {portfolioNav.map((item, index) => (
            <li
              key={index}
              onClick={() => setSelected(index)}
              className={index === selected ? "selected" : ""}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </nav>
      <ul className={`image-grid ${selected !== null ? "show" : ""}`}>
        {renderImages().map((item, index) => (
          <li key={index} className="image-item show">
            <img
              src={item.image}
              alt={`img-${index}`}
              onClick={() => handleImageClick(item.link)}
            />
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default PortfolioRow;
