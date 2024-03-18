import React from "react";
import { castInfo } from "../Data/CastInfo";

export const CastInfo = () => {
  return (
    <div className="castInfoContainer">
      {castInfo.map((castMember, index) => (
        <div key={index} className="castMember">
          <h3>{castMember.name}</h3>
          <p>{castMember.occupation}</p>
          <img src={castMember.img} alt={castMember.name} />
          <p>{castMember.description}</p>
        </div>
      ))}
    </div>
  );
};
