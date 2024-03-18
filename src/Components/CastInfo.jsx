import React, { useState } from "react";
import { castInfo } from "../Data/CastInfo";
import Modal from "./Modal";

export const CastInfo = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(selectedCard === index ? null : index);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="castInfoContainer">
      {castInfo.map((castMember, index) => (
        <div
          key={index}
          className="castMember"
          onClick={() => handleCardClick(index)}
        >
          <h3>{castMember.name}</h3>
          <p>{castMember.occupation}</p>
          <img src={castMember.img} alt={castMember.name} />
          <p>{castMember.description}</p>
        </div>
      ))}
      <Modal
        isOpen={selectedCard !== null}
        onClose={handleCloseModal}
        castMember={selectedCard !== null ? castInfo[selectedCard] : null}
      />
    </div>
  );
};
