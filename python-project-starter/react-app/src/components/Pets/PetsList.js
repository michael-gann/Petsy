import React, { useEffect, useState } from "react";
import Pet from "./Pet"


const PetsList = () => {
  const [pets, setPets] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/pets");
      const petData = await response.json();
      setPets(petData)
    }
    fetchData();
  }, []);

  return (
    <>
    <h1>Pets: </h1>
    {pets.map(pet => <Pet key={pet.id} pet={pet}></Pet>)}
    </>
  )
}

export default PetsList;
