import React, { useEffect, useState, useCallback } from "react";
import castInfoData from "../Data/CastInfo";

export const CastInfo = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [castInfo, setCastInfo] = useState(castInfoData);

  useEffect(() => {
    setCastInfo(castInfoData);
  }, []);

  const handleCardClick = useCallback(
    (index) => {
      if (index < 0) {
        setSelectedCard(castInfo.length - 1);
      } else if (index >= castInfo.length) {
        setSelectedCard(0);
      } else {
        setSelectedCard(index);
      }
    },
    [castInfo.length]
  );

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
  }, [castInfo.length, handleCardClick, selectedCard]);

  return (
    <div className="castInfoContainer">
      {castInfo &&
        castInfo.length > 0 &&
        castInfo?.map((castMember, index) => (
          <div key={index} className="castMember">
            <h3>{castMember.name}</h3>
            <img src={castMember.img} alt={castMember.name} />
            <p>{castMember.description}</p>
          </div>
        ))}
    </div>
  );
};
