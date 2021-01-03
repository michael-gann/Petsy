import React from "react";
import NumberFormat from "react-number-format";
import { useHistory } from "react-router-dom";
import AddPetToCart from '../ShoppingCart/AddPetToCart';

function Pet({ pet }) {
  const history = useHistory();

  const handleClick = (e) => {
    if (history.location.pathname === "/pets" && e.target.className === "addToCartBtn") return history.push('/cart')
    return history.push(`/pets/${pet.id}`);
  };

  return (
    <div className="pet-container">
      <div className="image-container" onClick={handleClick}>
        <img src={pet.imgurl} alt="Pet pic" />
      </div>
      <div className="pet-details" onClick={handleClick}>
        <div className="pet-name">
          {pet.name}
        </div>
        <div>
          {pet.breed}
        </div>
        <div className="price-and-add-pet">
          <NumberFormat
            value={pet.price}
            decimalScale={2}
            fixedDecimalScale={true}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
          <div className="add-pet-cart-btn">
            <AddPetToCart pet={pet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pet;
