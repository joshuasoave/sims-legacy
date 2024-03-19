import React, { useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PhotoModal from "./PhotoModal";

const ImageCarousel = ({ photos = [] }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setPhotoIndex(0);
  }, [photos]);

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="imageContainer">
      {photos?.length > 0 && (
        <>
          <div className="imageWrapper">
            <button onClick={decreasePhotoIndex} className="arrowButton">
              <FaChevronLeft className="arrowIcon" />
            </button>
            <img
              src={photos[photoIndex]?.photo}
              alt={photos[photoIndex]?.caption}
              className="carouselImage"
              onClick={openModal} // Open modal on image click
            />
            <button onClick={increasePhotoIndex} className="arrowButton">
              <FaChevronRight className="arrowIcon" />
            </button>
          </div>
          <PhotoModal
            isOpen={isModalOpen}
            onClose={closeModal}
            photo={photos[photoIndex]?.photo}
            caption={photos[photoIndex]?.caption}
          />
        </>
      )}
    </div>
  );
};

export default ImageCarousel;
