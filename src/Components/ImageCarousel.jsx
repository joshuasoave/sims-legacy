import React, { useState } from "react";

const ImageCarousel = ({ photos = [], title }) => {
  const [photoIndex, setPhotoIndex] = useState(0);

  const increasePhotoIndex = () => {
    if (photoIndex + 1 < photos.length) {
      setPhotoIndex(photoIndex + 1);
    }
  };

  const decreasePhotoIndex = () => {
    if (photoIndex > 0) {
      setPhotoIndex(photoIndex - 1);
    }
  };

  return (
    <div className="imageContainer">
      {photos.length > 0 && (
        <>
          <img src={photos[photoIndex]?.photo} alt={title} />
          <p>{photos[photoIndex]?.caption}</p>
          <div className="carouselControls">
            <button onClick={decreasePhotoIndex} disabled={photoIndex === 0}>
              Previous
            </button>
            <button
              onClick={increasePhotoIndex}
              disabled={photoIndex === photos.length - 1}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;
