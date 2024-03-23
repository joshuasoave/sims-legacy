import * as React from "react";
import * as entryData from "../Data/Entries";
import { Chapter } from "./Chapter";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Entries = ({ setActiveChapter }) => {
  const [data, setData] = React.useState(entryData);
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    setData(entryData);
    setActiveChapter(data[activeIndex]?.data);
  }, [data, activeIndex, setActiveChapter]);

  const goToNextChapter = () => {
    if (activeIndex < data.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const goToPreviousChapter = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <div className="entriesContainer">
      <div className="chapterNavigation">
        {activeIndex > 0 ? (
          <button className="previousButton" onClick={goToPreviousChapter}>
            <FaChevronLeft size={20} />
          </button>
        ) : (
          <div className="buttonPlaceholder"></div>
        )}

        {data && data.length > 0 && (
          <Chapter chapter={data[activeIndex].data} />
        )}

        {activeIndex < data.length - 1 ? (
          <button className="nextButton" onClick={goToNextChapter}>
            <FaChevronRight size={20} />
          </button>
        ) : (
          <div className="buttonPlaceholder"></div>
        )}
      </div>
      {!data || (data.length === 0 && <p>No entries yet</p>)}
    </div>
  );
};
