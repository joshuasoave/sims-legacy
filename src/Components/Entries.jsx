import React, { useState, useEffect } from "react";
import { entryData } from "../Data/EntryData";
import ImageCarousel from "./ImageCarousel";

const Entries = () => {
  const [entryIndex, setEntryIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight" && entryIndex < entryData.length - 1) {
        setEntryIndex(entryIndex + 1);
      } else if (e.key === "ArrowLeft" && entryIndex > 0) {
        setEntryIndex(entryIndex - 1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [entryIndex]);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="entryContentContainer">
      {entryData.map((entry, index) => (
        <div
          key={index}
          className={`entry ${index === entryIndex ? "active" : ""}`}
        >
          <h2>{entry.title}</h2>
          <ImageCarousel photos={entry.photos} />
          <p
            className={`entryStory ${
              expanded && entryIndex === index ? "expanded" : ""
            }`}
            onClick={toggleExpand}
          >
            {entry.story}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Entries;
