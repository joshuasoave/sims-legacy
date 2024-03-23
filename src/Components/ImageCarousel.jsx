import React, { useState, useEffect, useCallback } from "react";
import PhotoModal from "./PhotoModal";

const ImageCarousel = ({ photos = [], prevPhotoIndex }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(prevPhotoIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isModalOpen) {
        if (photoIndex < photos.length - 1) {
          setPhotoIndex(photoIndex + 1);
        } else if (photoIndex === photos.length - 1) {
          setPhotoIndex(0);
        }
      } else {
        clearInterval(interval);
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isModalOpen, photoIndex, photos.length, setPhotoIndex]);

  useEffect(() => {
    setPhotoIndex(0);
  }, [photos, setPhotoIndex]);

  const increasePhotoIndex = useCallback(() => {
    if (!isModalOpen) {
      if (photoIndex < photos.length - 1) {
        setPhotoIndex(photoIndex + 1);
      } else {
        setPhotoIndex(0);
      }
    }
  }, [photoIndex, photos.length, setPhotoIndex, isModalOpen]);

  const decreasePhotoIndex = useCallback(() => {
    if (!isModalOpen) {
      if (photoIndex === 0) {
        setPhotoIndex(photos.length - 1);
      } else {
        setPhotoIndex(photoIndex - 1);
      }
    }
  }, [photoIndex, photos.length, setPhotoIndex, isModalOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) {
        if (e.key === "ArrowRight") {
          increasePhotoIndex();
        } else if (e.key === "ArrowLeft") {
          decreasePhotoIndex();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [photoIndex, decreasePhotoIndex, increasePhotoIndex, isModalOpen]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = (event) => {
    event.stopPropagation();
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
            photoIndex={photoIndex}
            setPhotoIndex={setPhotoIndex}
          />
        </>
      )}
    </div>
  );
};

export default ImageCarousel;
