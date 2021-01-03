import React, { useEffect, useState } from "react";
import Pet from "./Pet";
import { areas } from "../../common/areas";
import { trackPromise } from "react-promise-tracker";
import Spinner from "../Spinner";

import "./petsList.css";

const PetsList = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/pets");
      const petData = await response.json();
      setPets(petData);
    }
    trackPromise(fetchData(), areas.pet2);
  }, []);

  return (
    <div className="petslist-main-container">
      <h1 className="pets-header">PETS</h1>
      <Spinner area={areas.pet2} />
      <div className="petslist-inner-container">
        {pets.map((pet) => (
          <Pet key={pet.id} pet={pet}></Pet>
        ))}
      </div>
    </div>
  );
};

export default PetsList;
