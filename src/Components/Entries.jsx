import React, { useState } from "react";
import { entryData } from "../Data/EntryData";
import ImageCarousel from "./ImageCarousel";

const Entries = () => {
  const photoIndex = 0;
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
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
              overflow: "hidden",
            }}
          >
            {entry.story}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Entries;
