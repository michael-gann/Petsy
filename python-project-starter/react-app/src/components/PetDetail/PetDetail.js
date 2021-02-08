import React, { useState, useEffect } from "react";
import NumberFormat from "react-number-format";
import { useParams } from "react-router-dom";
import PetBySeller from "../MoreFromSeller/PetBySeller";
import AddPetToCart from "../ShoppingCart/AddPetToCart";
import RemoveFromCart from "../ShoppingCart/RemovePetFromCart";
import Pet from "../Pets/Pet";

import Carousel from "react-elastic-carousel";

import "./PetDetail.css";

function PetDetail({ user, isAuthenticated }) {
  const [pet, setPet] = useState([]);
  const { id } = useParams();
  const [pets, setPets] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    async function fetchData() {
      // console.log(id)
      const res = await fetch(`/api/pets/${id}`);
      const resData = await res.json();
      setPet(resData);
      // console.log(resData)
    }
    fetchData();
  }, [id]);

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  useEffect(() => {
    const getPets = async () => {
      const res = await fetch(`/api/users/${1}/pets/${1}`);
      const json = await res.json();
      setPets(json);
    };
    getPets();

    // document.getElementByClassName();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, [pet]);

  return (
    <div className="pet-detail-container">
      <div className="pet-detail-img-info">
        <div className="pet-detail-image-container">
          <img className="image-pet" src={pet.imgurl} alt="Pet pic" />
        </div>
        <div className="details">
          <h3>{pet.name}</h3>
          <p>{pet.description}</p>
          <div className="pet-specifics">{`${pet.name}'s Details:`}</div>
          <div className="pet-detail-field-value">
            <div className="pet-detail-field">Breed:</div>
            <div className="pet-detail-value">{pet.breed}</div>
          </div>
          <div className="pet-detail-field-value">
            <div className="pet-detail-field">Age:</div>
            <div className="pet-detail-value">{`${pet.age} years old`}</div>
          </div>
          <div className="pet-detail-field-value">
            <div className="pet-detail-field">Weight:</div>
            <div className="pet-detail-value">{`${pet.weight} lbs`}</div>
          </div>
          <div className="pet-detail-field-value">
            <div className="pet-detail-field">Gender:</div>
            <div className="pet-detail-value">{pet.gender}</div>
          </div>
          <div className="pet-detail-field-value">
            <div className="pet-price">
              <NumberFormat
                value={pet.price}
                decimalScale={2}
                fixedDecimalScale={true}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </div>
          </div>
          {isAuthenticated && (
            <div className="cart-button-container">
              <AddPetToCart pet={pet} />
            </div>
          )}
        </div>
      </div>
      <div
        className={
          mounted
            ? "new-pet-detail-more-container"
            : "pet-detail-more-container"
        }
      >
        <PetBySeller user={user} sellerId={pet.sellerId} />
      </div>
    </div>
  );
}

export default PetDetail;
