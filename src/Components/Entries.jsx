import React from "react";
import { entryData } from "../Data/EntryData";

const Entries = () => {
  return (
    <div className="contentContainer">
      <h2>Magical Diary Entries</h2>
      {entryData.map((entry, index) => (
        <div key={index} className="entry">
          <h3>{entry.title}</h3>
          <p>{entry.story}</p>
          <img src={entry.photo} alt={entry.title} />
          <p>{entry.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Entries;
