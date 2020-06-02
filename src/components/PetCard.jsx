import React, { useEffect, useState } from "react";
import fakeType from "../fakeType.json";
import fakePets from "../fakePets.json";

const PetCard = ({ info }) => {
  const { _id, name, _type, breed, description, isLost } = info;
  const [isLostStatus, setIsLostStatus] = useState(isLost);

  const getType = () => {
    return fakeType.find((type) => type._id === _type).description;
  };

  const findPetToUpdate = () => {
    return fakePets.find((pet) => pet._id === _id);
  };

  const toogleIsLostStatus = () => {
    setIsLostStatus(!isLostStatus);
    petToUpdate.isLost = isLostStatus;
  };

  const getIsLost = () => {
    return isLostStatus
      ? {
          bgClass: "bg-red-200",
          class: "text-red-500",
          description: "Estoy perdido",
        }
      : {
          bgClass: "bg-green-200",
          class: "text-green-500",
          description: "Estoy en casa",
        };
  };

  const petToUpdate = findPetToUpdate();
  const isLostStyle = getIsLost();

  return (
    <div className={`${isLostStyle.bgClass} m-5`}>
      <h1>{name}</h1>
      <p>{getType()}</p>
      <p>{breed}</p>
      <p>{description}</p>
      <div className="flex">
        <p className={isLostStyle.class}>{isLostStyle.description}</p>
        <button onClick={toogleIsLostStatus}> press</button>
      </div>
    </div>
  );
};
export default PetCard;

//comentario pablo
