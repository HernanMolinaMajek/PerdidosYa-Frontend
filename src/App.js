import React, { useState, useEffect } from "react";
import fakeOwners from "./fakeOwners.json";
import NewPetForm  from "./views/NewPetForm/Index"
import Login from "./views/Login/Index"
import LostPetForm from "./views/LostPetForm/Index"
import MoreInfoAfterFb from "./views/MoreInfoAfterFb/Index"


const App = () => {
  const [user, setUser] = useState(null);

  //mi cambio
  
  useEffect(() => {
    setOwnerInfo(2);
  }, []);

  const getLoggedUser = (userId) => {
    return fakeOwners.find((owner) => owner._id === userId);
  };

  const setOwnerInfo = (userId) => {
    setUser(getLoggedUser(userId));
  
  };

  return <div className="bg-white">
    <NewPetForm/>
    <Login/>
    <LostPetForm/>
    <MoreInfoAfterFb/>
  </div>;
};

export default App;
