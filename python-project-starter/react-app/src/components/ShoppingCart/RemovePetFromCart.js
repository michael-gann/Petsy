import React, { useState, useEffect } from "react";

function RemovePetFromCart({ item, localPetsCart, setLocalPetsCart, setPetsCart }) {
  let [cart, setCart] = useState([]);
  // let [petsCart, setPetsCart] = useState([]);
  let localCart = localStorage.getItem("petCart");

  const removeItem = () => {
    let cartCopy = [...localPetsCart];
    let itemToRemove = item.id.toString();

    let newCartCopy = cartCopy.filter((cartItem) => {
      return Object.keys(cartItem)[0] !== itemToRemove;
    });

    cartCopy = [...newCartCopy];
    setLocalPetsCart([...newCartCopy]);

    let cartString = JSON.stringify(newCartCopy);
    localStorage.setItem("petCart", cartString);

    async function fetchData() {
      let fetchedPets = [];

      if (newCartCopy.length < 1) {
        setPetsCart([]);
      };

      newCartCopy.map(async (cartItem) => {
        const response = await fetch(`/api/pets/${Object.keys(cartItem)}`);
        const itemData = await response.json();
        fetchedPets.push(itemData);
        setPetsCart([...fetchedPets]);
      });
    }
    fetchData();
  };

  // useEffect(() => {
  //   localCart = JSON.parse(localCart);
  //   if (localCart) setCart(localCart);
  // }, []);

  return (
    <>
      <button className="removeFromCartBtn" onClick={removeItem}>
        <div className="removeFromCartBtn-div">Remove Pet</div>
      </button>
    </>
  );
}

export default RemovePetFromCart;
