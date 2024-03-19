import React, { useCallback, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PhotoModal = ({ isOpen, onClose, photos, caption }) => {
  const [photoIndex, setPhotoIndex] = useState(0);

  const increasePhotoIndex = useCallback(() => {
    if (photoIndex < photos.length - 1) {
      setPhotoIndex(photoIndex + 1);
    } else if (photoIndex === photos.length - 1) {
      setPhotoIndex(0);
    }
  }, [photoIndex, photos]);

  const decreasePhotoIndex = useCallback(() => {
    if (photoIndex === 0) {
      setPhotoIndex(photos.length - 1);
    } else if (photoIndex > 0) {
      setPhotoIndex(photoIndex - 1);
    }
  }, [photoIndex, photos]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        increasePhotoIndex();
      } else if (e.key === "ArrowLeft") {
        decreasePhotoIndex();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [photoIndex, decreasePhotoIndex, increasePhotoIndex]);

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
          <img src={photos[photoIndex].photo} alt={caption} />
        </div>
        <p>{photos[photoIndex].caption}</p>
        <div className="modalButtonContainer">
          <button onClick={decreasePhotoIndex} className="arrowButton">
            <FaChevronLeft className="arrowIcon" />
          </button>
          <button onClick={increasePhotoIndex} className="arrowButton">
            <FaChevronRight className="arrowIcon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;
