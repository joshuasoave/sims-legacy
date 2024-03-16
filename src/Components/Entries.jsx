import React, { useState, useEffect } from "react";
import { entryData } from "../Data/EntryData";

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

  return (
    <div className="contentContainer">
      <div className="entry">
        {isMobile ? null : (
          <>
            <div className="buttonContainer">
              <button
                className="prevButton"
                onClick={() => {
                  if (!isFirstEntry) {
                    setEntryIndex(entryIndex - 1);
                    setExpanded(false);
                  }
                }}
                style={{ visibility: isFirstEntry ? "hidden" : "visible" }}
              >
                Previous Entry
              </button>
            </div>
          </>
        )}
        <div className="entryContent">
          <h2>{entryData[entryIndex].title}</h2>
          <div className={`imageContainer ${expanded ? "expanded" : ""}`}>
            <img
              src={entryData[entryIndex].photo}
              alt={entryData[entryIndex].title}
            />
          </div>
          <p
            className={`entryStory ${expanded ? "expanded" : ""}`}
            onClick={toggleExpand}
          >
            {entryData[entryIndex].story}
          </p>
          {isMobile ? (
            <>
              <button
                className="prevButton"
                onClick={() => {
                  if (!isFirstEntry) {
                    setEntryIndex(entryIndex - 1);
                    setExpanded(false);
                  }
                }}
                style={{ visibility: isFirstEntry ? "hidden" : "visible" }}
              >
                {" "}
                Previous Entry
              </button>
              <button
                className="nextButton"
                onClick={() => {
                  if (!isLastEntry) {
                    setEntryIndex(entryIndex + 1);
                    setExpanded(false);
                  }
                }}
                style={{ visibility: isLastEntry ? "hidden" : "visible" }}
              >
                {" "}
                Next Entry
              </button>
            </>
          ) : null}
        </div>
        {isMobile ? null : (
          <div className="buttonContainer">
            <button
              className="nextButton"
              onClick={() => {
                if (!isLastEntry) {
                  setEntryIndex(entryIndex + 1);
                  setExpanded(false);
                }
              }}
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
