import * as React from "react";
import * as entryData from "../Data/Entries";
import { Chapter } from "./Chapter";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Entries = ({ setActiveChapter }) => {
  const [data, setData] = React.useState(entryData);
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    setData(entryData);
    setActiveChapter(data[activeIndex]?.data.chapter);
  }, [data, activeIndex, setActiveChapter]);

  const goToNextChapter = () => {
    if (activeIndex < data.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else if (activeIndex === data.length - 1) {
      setActiveIndex(0);
    }
  };

  const goToPreviousChapter = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else if (activeIndex === 0) {
      setActiveIndex(data.length - 1);
    }
  };

  return (
    <>
      <div className="chapterNavigation">
        <button id={"previousButton"} onClick={goToPreviousChapter}>
          <FaChevronLeft size={20} />
        </button>
        <button id={"nextButton"} onClick={goToNextChapter}>
          <FaChevronRight size={20} />
        </button>
      </div>
      <div className="entriesContainer">
        <Chapter chapter={data[activeIndex]?.data} />
      </div>
    </>
  );
};
