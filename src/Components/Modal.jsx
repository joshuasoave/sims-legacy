import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Modal = ({
  isOpen,
  onClose,
  castMember,
  decreaseCastIndex,
  increaseCastIndex,
}) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <div className="closeButtonContainer">
          <button onClick={onClose} className="closeButton">
            X
          </button>
        </div>
        <div className="imageContainer">
          <h3>{castMember.name}</h3>
          <img
            src={castMember.img}
            alt={castMember.name}
            className="modalImage"
          />
        </div>
        <div className="castInfo">
          <p>{castMember.description}</p>
        </div>
        <div className="modalButtonContainer">
          <button onClick={decreaseCastIndex} className="arrowButton">
            <FaChevronLeft
              className="arrowIcon"
              size={isSmallScreen ? 10 : 25}
            />
          </button>
          <button onClick={increaseCastIndex} className="arrowButton">
            <FaChevronRight
              className="arrowIcon"
              size={isSmallScreen ? 10 : 25}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
