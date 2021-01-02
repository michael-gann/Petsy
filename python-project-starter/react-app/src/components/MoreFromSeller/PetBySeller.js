import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Pet from "../Pets/Pet"

const PetBySeller = ({ user, sellerId }) => {
  const [pet, setPet] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const getPets = async () => {
      const res = await fetch(`/api/users/${sellerId}/pets/${id}`);
      const json = await res.json();
      setPet(json);
    }
    getPets();
  }, [id, sellerId]);


  return (
    <>
      <h3>More from this seller:</h3>
      {pet.map(pet => {
        return (<div className="more-pets">
          <Pet key={pet.id} pet={pet}></Pet>)
        </div>)
      }
    }
    </>
  )
};

export default PetBySeller;
