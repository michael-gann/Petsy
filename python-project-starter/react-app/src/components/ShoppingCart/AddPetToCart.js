import React, { useState, useEffect } from "react";

function AddPetToCart({ pet }) {
  let [petCart, setPetCart] = useState([])

  let localCart = localStorage.getItem("petCart");

  console.log("localcart:", localCart)

  const addPet = () => {
    let cartCopy = [...petCart];
    let petToAdd = pet.id
    console.log(petToAdd)
    let existingPet = cartCopy.find(cartPet => {
      return Object.keys(cartPet) == petToAdd.toString()
    });

    if (existingPet) {
      return alert("We are not yet able to clone pets.")
    } else {
      const obj = {};
      obj[petToAdd] = 1
      cartCopy.push(obj)
    }

    setPetCart(cartCopy)

    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("petCart", stringCart)
  }

  useEffect(() => {
    localCart = JSON.parse(localCart);
    if (localCart) setPetCart(localCart)
  }, [])

  return (
    <>
      <button
        className="addToCartBtn"
        onClick={addPet}>
        Add To Basket
      </button>
    </>
  );
}

export default AddPetToCart;
