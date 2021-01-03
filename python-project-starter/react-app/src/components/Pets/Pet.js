import React from "react";
import NumberFormat from "react-number-format";
import { useHistory } from "react-router-dom";
import AddPetToCart from '../ShoppingCart/AddPetToCart';

function Pet({ pet }) {
  const history = useHistory();

  const handleClick = () => {
    return history.push(`/pets/${pet.id}`);
  };

  return (
    <div className="pet-container">
      <div className="image-container" onClick={handleClick}>
        <img src={pet.imgurl} alt="Pet pic" />
      </div>
      <div className="pet-details" onClick={handleClick}>
        {pet.user.firstName} {pet.user.lastName}
        {pet.name}
        {pet.breed}
        <NumberFormat
          value={pet.price}
          decimalScale={2}
          fixedDecimalScale={true}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
        <AddPetToCart pet={pet} />
      </div>
    </div>
  );
}

export default Pet;
