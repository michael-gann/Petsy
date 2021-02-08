import React, { useEffect, useState } from "react";
import { useHistory, useParams, Redirect } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import Pet from "../Pets/Pet";

import styled from "styled-components";

const StyledCarousel = styled.div`
  width: 80vw;
`;

const PetBySeller = ({ user, sellerId }) => {
  const history = useHistory();
  const [pet, setPet] = useState([]);
  const { id } = useParams();

  const handleClick = (e) => {
    return <Redirect to={`/pets/${id}`} />;
  };

  useEffect(() => {
    const getPets = async () => {
      const res = await fetch(`/api/users/${sellerId}/pets/${id}`);
      const json = await res.json();
      setPet(json);
    };
    if (sellerId) getPets();

    // document.getElementByClassName();
  }, [id, sellerId]);

  return (
    <>
      <h3>More from this seller:</h3>

      <Carousel itemsToShow={1}>
        {pet.map((pet) => {
          return (
            <div className="more-pets" key={pet.id}>
              <Pet pet={pet}></Pet>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default PetBySeller;
