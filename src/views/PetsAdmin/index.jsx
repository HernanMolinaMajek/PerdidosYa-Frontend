import React, { useState, useEffect } from "react";
import fakePets from "../../fakePets.json"
import PetCard from "../../components/PetCard"

const Index = ({ user }) => {
  const [userPets, setUserPets] = useState([]);
  const {_id} = user

  useEffect(() => {
    getAndSetUserPets(_id)
  }, []);

  const getAndSetUserPets = (userId) => {
    setUserPets(fakePets.filter((pet) => pet._ownerId === userId));
  };

  return (
      <div className="flex">
          {userPets.map((pet) => (<PetCard key={pet._id} info={pet}/>))}
      </div>
  );
};
export default Index;
