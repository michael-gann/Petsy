import React, { useState, useEffect } from "react";
import Pet from "./Pet";
import { trackPromise } from "react-promise-tracker";
import Spinner from "../Spinner";
import { areas } from "../../common/areas";

function Pets() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/pets");
      const resData = await res.json();
      setPets(resData);
    }
    trackPromise(fetchData(), areas.pet);
  }, []);

  return (
    <>
      <div className="header-text">
        <h2>PETS</h2>
      </div>
      <Spinner area={areas.pet} />
      <div className="pet-components">
        {pets.map((pet) => {
          return <Pet key={pet.id} pet={pet} />;
        })}
      </div>
    </>
  );
}

export default Pets;
