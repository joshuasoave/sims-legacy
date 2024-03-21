import React, { useState } from "react";
import { entryData } from "../Data/EntryData";
import ImageCarousel from "./ImageCarousel";

const Entries = () => {
  const photoIndex = 0;
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  // Recursive function to extract text content from JSX elements
  const extractTextContent = (jsxElement) => {
    if (typeof jsxElement === "string") {
      return jsxElement; // If it's already a string, return it
    } else if (Array.isArray(jsxElement)) {
      return jsxElement.map((child) => extractTextContent(child)).join(""); // Recursively extract text content from array of JSX elements
    } else if (typeof jsxElement === "object" && jsxElement.props) {
      return extractTextContent(jsxElement.props.children); // Recursively extract text content from child JSX element
    } else {
      return ""; // Default case, return empty string
    }
  };

  const truncateText = (jsxElement) => {
    const text = extractTextContent(jsxElement);
    const lines = text
      .split("<p>")
      .join("\n")
      .split("</p>")
      .join("\n")
      .split("\n");
    if (lines.length > 4) {
      return lines.slice(0, 4).join("\n") + "...";
    }
    return text;
  };

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
              maxHeight: expandedIndex === index ? "none" : "4em",
              overflow: "hidden",
            }}
          >
            {expandedIndex === index ? entry.story : truncateText(entry.story)}
          </div>
          {expandedIndex !== index &&
            entry.story &&
            extractTextContent(entry.story).split("\n").length > 4 && (
              <button onClick={() => toggleExpand(index)}>Read more</button>
            )}
        </div>
      ))}
    </div>
  );
};

export default Entries;
