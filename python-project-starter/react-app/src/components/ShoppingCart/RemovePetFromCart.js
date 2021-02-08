import React, { useState, useEffect } from "react";

function RemovePetFromCart({ item }) {
  let [cart, setCart] = useState([]);
  let [petsCart, setPetsCart] = useState([]);
  let localCart = localStorage.getItem("petCart");

  const removeItem = () => {
    let cartCopy = JSON.parse(localCart);
    let itemToRemove = item.id.toString();

    let newCartCopy = cartCopy.filter((cartItem) => {
      return Object.keys(cartItem)[0] !== itemToRemove;
    });

    setPetsCart(newCartCopy);

    let cartString = JSON.stringify(newCartCopy);
    localStorage.setItem("petCart", cartString);
  };

  useEffect(() => {
    localCart = JSON.parse(localCart);
    if (localCart) setCart(localCart);
  }, []);

  return (
    <>
      <button className="removeFromCartBtn" onClick={removeItem}>
        <div className="removeFromCartBtn-div">Remove Pet</div>
      </button>
    </>
  );
}

export default RemovePetFromCart;
