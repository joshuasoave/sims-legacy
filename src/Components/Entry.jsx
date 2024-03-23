import React from "react";

export const Entry = ({ entry, chapterNumber, entryIndex }) => {
  return (
    <div className="entry">
      <h4>{entry.title}</h4>
      <img src={entry.photo} alt="entry" />
      <p>{entry.caption}</p>
    </div>
  );
};
