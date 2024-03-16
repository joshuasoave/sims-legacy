import React, { useState } from "react";
import { entryData } from "../Data/EntryData";

const Entries = () => {
  const [entryIndex, setEntryIndex] = useState(0);
  const [expanded, setExpanded] = useState(false); // State for text expansion

  const isFirstEntry = entryIndex === 0;
  const isLastEntry = entryIndex === entryData.length - 1;

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="contentContainer">
      <div className="entry">
        <div className="buttonContainer">
          <button
            className="prevButton"
            onClick={() => {
              if (!isFirstEntry) {
                setEntryIndex(entryIndex - 1);
                setExpanded(false); // Reset expansion on navigation
              }
            }}
            style={{ visibility: isFirstEntry ? "hidden" : "visible" }}
          >
            Previous Entry
          </button>
        </div>
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
        </div>
        <div className="buttonContainer">
          <button
            className="nextButton"
            onClick={() => {
              if (!isLastEntry) {
                setEntryIndex(entryIndex + 1);
                setExpanded(false); // Reset expansion on navigation
              }
            }}
            style={{ visibility: isLastEntry ? "hidden" : "visible" }}
          >
            Next Entry
          </button>
        </div>
      </div>
    </div>
  );
};

export default Entries;
