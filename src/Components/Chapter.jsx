import React, { useEffect } from "react";
import { Entry } from "./Entry";

export const Chapter = ({ chapter }) => {
  const chapterNumber = chapter?.chapter;

  useEffect(() => {
    document.getElementById(
      `headerText`
    ).innerText = `Chapter ${chapterNumber}`;
  }, [chapterNumber]);

  return (
    <div className="entries">
      {chapter?.entries?.map((entry, index) => (
        <Entry
          key={index}
          entry={entry}
          index={index}
          chapterNumber={chapterNumber}
          entryIndex={index}
        />
      ))}
    </div>
  );
};
