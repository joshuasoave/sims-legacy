import React from "react";

const PhotoModal = ({ isOpen, onClose, photo, caption }) => {
  if (!isOpen) return null;

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <img src={photo} alt={caption} />
        <p>{caption}</p>
      </div>
    </div>
  );
};

export default PhotoModal;
