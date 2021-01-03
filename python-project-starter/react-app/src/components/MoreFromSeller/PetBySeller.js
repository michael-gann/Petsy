import React, { useEffect, useState } from "react";
import { useHistory, useParams, Redirect } from "react-router-dom";
import HorizontalScroll from "react-scroll-horizontal";
import Pet from "../Pets/Pet";

const PetBySeller = ({ user, sellerId }) => {
  const history = useHistory();
  const [pet, setPet] = useState([]);
  const { id } = useParams();

  const handleClick = (e) => {
    // history.push(`/pets/${id}`)
    return <Redirect to={`/pets/${id}`} />;
  };

  useEffect(() => {
    const getPets = async () => {
      const res = await fetch(`/api/users/${user.id}/pets/${id}`);
      const json = await res.json();
      setPet(json);
    };
    getPets();
  }, [id, sellerId]);

  const child = { width: `300em`, height: `100%` };
  const parent = { height: `100%` };
  return (
    <>
      <h3>More from this seller:</h3>
      <div style={parent} className="pets-scroll">
        <HorizontalScroll reverseScroll={true}>
          {pet.map((pet) => {
            return (
              <div className="more-pets">
                <Pet
                  key={pet.id}
                  pet={pet}
                  style={child}
                  onClick={handleClick}
                ></Pet>
              </div>
            );
          })}
        </HorizontalScroll>
      </div>
    </>
  );
};

export default PetBySeller;
