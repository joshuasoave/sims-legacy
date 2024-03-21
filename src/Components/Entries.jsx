import React, { useState } from "react";
import { entryData } from "../Data/EntryData";
import ImageCarousel from "./ImageCarousel";

const Entries = () => {
  const photoIndex = 0;
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="entryContentContainer">
      {entryData.map((entry, index) => (
        <div key={index} className={`entry`}>
          <h2>{entry.title}</h2>
          <ImageCarousel photos={entry.photos} prevPhotoIndex={photoIndex} />
          <p className={`entryStory`} onClick={toggleExpand}>
            {entry.story}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Entries;
