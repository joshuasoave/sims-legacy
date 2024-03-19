import React, { useState, useEffect } from "react";
import { entryData } from "../Data/EntryData";
import ImageCarousel from "./ImageCarousel";

const Entries = () => {
  const [entryIndex, setEntryIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const isFirstEntry = entryIndex === 0;
  const isLastEntry = entryIndex === entryData.length - 1;

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const handlePrevEntry = () => {
    if (!isFirstEntry) {
      setEntryIndex(entryIndex - 1);
      setExpanded(false);
    }
  };

  const handleNextEntry = () => {
    if (!isLastEntry) {
      setEntryIndex(entryIndex + 1);
      setExpanded(false);
    }
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
      {isMobile && (
        <>
          <button
            className={`button prevButton ${isFirstEntry ? "hidden" : ""}`}
            onClick={handlePrevEntry}
          >
            Previous Entry
          </button>

          <button
            className={`button nextButton ${isLastEntry ? "hidden" : ""}`}
            onClick={handleNextEntry}
          >
            Next Entry
          </button>
        </>
      )}
    </div>
  );
};

export default Entries;
