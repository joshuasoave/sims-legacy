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
    <div className="contentContainer">
      <div className="entry">
        <div className="entryContent">
          <h2>{entryData[entryIndex].title}</h2>
          <ImageCarousel
            photos={entryData[entryIndex].photos}
            title={entryData[entryIndex].title}
          />
          <p
            className={`entryStory ${expanded ? "expanded" : ""}`}
            onClick={toggleExpand}
          >
            {entryData[entryIndex].story}
          </p>
          {isMobile && (
            <>
              <button
                className="prevButton"
                onClick={handlePrevEntry}
                style={{ visibility: isFirstEntry ? "hidden" : "visible" }}
              >
                Previous Entry
              </button>
              <button
                className="nextButton"
                onClick={handleNextEntry}
                style={{ visibility: isLastEntry ? "hidden" : "visible" }}
              >
                Next Entry
              </button>
            </>
          )}
        </div>
        {!isMobile && (
          <div className="buttonContainer">
            <button
              className="prevButton"
              onClick={handlePrevEntry}
              style={{ visibility: isFirstEntry ? "hidden" : "visible" }}
            >
              Previous Entry
            </button>
            <button
              className="nextButton"
              onClick={handleNextEntry}
              style={{ visibility: isLastEntry ? "hidden" : "visible" }}
            >
              Next Entry
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Entries;
