import React from "react";
import { entryData } from "../Data/EntryData";
import AxelImage from "../Assets/Axel.png";
import BellaImage from "../Assets/Bella.png";
import SingingImage from "../Assets/Singing.png";

const Entries = () => {
  const [entryIndex, setEntryIndex] = React.useState(0);

  const isFirstEntry = entryIndex === 0;
  const isLastEntry = entryIndex === entryData.length - 1;

  const getImageSrc = (photo) => {
    switch (photo) {
      case "../Assets/Axel.png":
        return AxelImage;
      case "../Assets/Bella.png":
        return BellaImage;
      case "../Assets/Singing.png":
        return SingingImage;
      default:
        return null;
    }
  };

  return (
    <div className="contentContainer">
      <h2>Challenge Entries</h2>
      <div className="entry">
        <h3>{entryData[entryIndex].title}</h3>
        <p>{entryData[entryIndex].date}</p>
        <img
          src={getImageSrc(entryData[entryIndex].photo)}
          alt={entryData[entryIndex].title}
        />
        <p className="entryStory">{entryData[entryIndex].story}</p>

        <div className="buttonContainer">
          <button
            onClick={() => {
              if (!isFirstEntry) {
                setEntryIndex(entryIndex - 1);
              }
            }}
            style={{ visibility: isFirstEntry ? "hidden" : "visible" }}
          >
            Previous Entry
          </button>
          <button
            onClick={() => {
              if (!isLastEntry) {
                setEntryIndex(entryIndex + 1);
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
