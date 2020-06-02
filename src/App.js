import React, { useState, useEffect } from "react";
import fakeOwners from "./fakeOwners.json";
import PetAdmin from "./views/PetsAdmin";

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

  return <div>{user ? <PetAdmin user={user} /> : null}</div>;
};

export default App;
