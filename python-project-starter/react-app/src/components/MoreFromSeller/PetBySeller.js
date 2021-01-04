import React, { useEffect, useState } from "react";
import { useHistory, useParams, Redirect } from "react-router-dom";
import HorizontalScroll from "react-scroll-horizontal";
import Pet from "../Pets/Pet";
import Carousel from "react-material-ui-carousel";

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
      const res = await fetch(`/api/users/${sellerId}/pets/${id}`);
      const json = await res.json();
      setPet(json);
    };
    if (sellerId) getPets();
  }, [id, sellerId]);

  const child = { width: `300em`, height: `100%` };
  const parent = { height: `100%` };
  return (
    <>
      <h3>More from this seller:</h3>
      {pet.length > 3 ? (
        <div style={parent} className="pets-scroll">
          <HorizontalScroll reverseScroll={true}>
            {pet.map((pet) => {
              return (
                <div className="more-pets" key={pet.id}>
                  <Pet pet={pet} style={child} onClick={handleClick}></Pet>
                </div>
              );
            })}
          </HorizontalScroll>
        </div>
      ) : (
        <div className="pets-carousel">
          <Carousel autoPlay={false}>
            {pet.map((pet, index) => (
              <Pet pet={pet} key={index} onClick={handleClick}></Pet>
            ))}
          </Carousel>
        </div>
      )}
    </>
  );
};

export default PetBySeller;
