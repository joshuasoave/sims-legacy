import React, { useEffect, useState } from "react";
import { castInfo } from "../Data/CastInfo";
import Modal from "./Modal";

export const CastInfo = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    if (index < 0) {
      setSelectedCard(castInfo.length - 1);
    } else if (index >= castInfo.length) {
      setSelectedCard(0);
    } else {
      setSelectedCard(index);
    }
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        e.key === "ArrowRight" &&
        selectedCard !== null &&
        selectedCard < castInfo.length - 1
      ) {
        handleCardClick(selectedCard + 1);
      } else if (
        e.key === "ArrowLeft" &&
        selectedCard !== null &&
        selectedCard > 0
      ) {
        handleCardClick(selectedCard - 1);
      } else if (
        e.key === "ArrowRight" &&
        selectedCard >= castInfo.length - 1
      ) {
        handleCardClick(0);
      } else if (e.key === "ArrowLeft" && selectedCard === 0) {
        handleCardClick(castInfo.length - 1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCard]);

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
        decreaseCastIndex={() => handleCardClick(selectedCard - 1)}
        increaseCastIndex={() => handleCardClick(selectedCard + 1)}
      />
    </div>
  );
};
