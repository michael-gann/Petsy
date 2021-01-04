import React, { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";

function AddPetToCart({ pet }) {
  let [petCart, setPetCart] = useState([])
  const history = useHistory()

  let localCart = localStorage.getItem("petCart");

  const addPet = () => {
    let cartCopy = [...petCart];
    let petToAdd = pet.id

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
    return history.push("/cart")
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
        Add To Cart
      </button>
    </>
  );
}

export default AddPetToCart;
