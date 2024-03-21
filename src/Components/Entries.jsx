import React, { useEffect, useState } from "react";
import { entryData } from "../Data/EntryData";
import ImageCarousel from "./ImageCarousel";

const Entries = () => {
  const photoIndex = 0;
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const extractTextContent = (jsxElement) => {
    if (typeof jsxElement === "string") {
      return jsxElement;
    } else if (Array.isArray(jsxElement)) {
      return jsxElement.map((child) => extractTextContent(child)).join("");
    } else if (typeof jsxElement === "object" && jsxElement.props) {
      return extractTextContent(jsxElement.props.children);
    } else {
      return "";
    }
  };

  //truncate text after 100 characters
  const truncateText = (jsxElement) => {
    const textContent = extractTextContent(jsxElement);
    return textContent.length > 70 && isMobile
      ? textContent.slice(0, 70) + "..."
      : textContent.length > 100
      ? textContent.slice(0, 280) + "..."
      : textContent;
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 768);
    });
  }, []);

  return (
    <div className="entryContentContainer">
      {entryData.map((entry, index) => (
        <div key={index} className={`entry`}>
          <h2>{entry.title}</h2>
          <ImageCarousel photos={entry.photos} prevPhotoIndex={photoIndex} />
          <div
            className={`entryStory ${
              expandedIndex === index ? "expanded" : ""
            }`}
            onClick={() => toggleExpand(index)}
            style={{
              cursor: "pointer",
              maxHeight: expandedIndex === index ? "none" : "3em",
              overflow: "hidden",
            }}
          >
            {expandedIndex === index ? entry.story : truncateText(entry.story)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Entries;
