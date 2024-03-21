import React, { useState, useEffect, useCallback } from "react";
import PhotoModal from "./PhotoModal";

const ImageCarousel = ({ photos = [] }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      if (photoIndex < photos.length - 1) {
        setPhotoIndex(photoIndex + 1);
      } else {
        setPhotoIndex(0);
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [photoIndex, photos]);

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
            <img
              src={photos[photoIndex]?.photo}
              alt={photos[photoIndex]?.caption}
              className="carouselImage"
              onClick={openModal}
            />
          </div>
          <PhotoModal
            isOpen={isModalOpen}
            onClose={closeModal}
            photos={photos}
            caption={photos[photoIndex]?.caption}
          />
        </>
      )}
    </div>
  );
};

export default ImageCarousel;
