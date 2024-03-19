import React from "react";

const Modal = ({ isOpen, onClose, castMember }) => {
  if (!isOpen) return null;

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <h3>{castMember.name}</h3>
        <p>{castMember.occupation}</p>
        <img src={castMember.img} alt={castMember.name} />
        <p>{castMember.description}</p>
        <button className="closeBtn" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
