import React, { useState, useEffect } from "react";
import { portfolioNav } from "../../data/data";
import "../../../styles/home/imageMap/ImageMap.css";

function PortfolioRow() {
  const [selected, setSelected] = useState(0);

  const renderImages = () => {
    if (selected === null) {
      // If no category is selected, show all images
      return portfolioNav.flatMap((item) => item.images);
    } else {
      // If a category is selected, filter images based on the category
      return portfolioNav[selected]?.images || [];
    }
  };

  useEffect(() => {
    // Additional useEffect to handle the default category selection
    // This will run once when the component mounts
    // You can set a default category index here
    // For example, if you want the second category to be selected by default, use setSelected(1)
    // setSelected(1); // Uncomment and modify as needed
  }, []); // Empty dependency array to ensure it runs only once when the component mounts

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
