import React, { useState } from "react";
import { portfolioNav } from "../../data/data";
import "../../../styles/home/imageMap/ImageMap.css";

function PortfolioRow() {
  const [selected, setSelected] = useState(null);

  const renderImages = () => {
    if (selected === null) {
      // If no category is selected, show all images
      return portfolioNav.flatMap((item) => item.images);
    } else {
      // If a category is selected, filter images based on the category
      return portfolioNav[selected].images;
    }
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
            <img src={item} alt={`img-${index}`} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PortfolioRow;
