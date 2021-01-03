import React, { useState, useEffect } from "react";

function AddToCart({ item }) {
  let [cart, setCart] = useState([])

  let localCart = localStorage.getItem("cart");

  console.log("localcart:", localCart)

  const addItem = () => {
    let cartCopy = [...cart];
    let itemToAdd = item.id

    let existingItem = cartCopy.find(cartItem => {
      return Object.keys(cartItem) == itemToAdd.toString()
    });

    if (existingItem) {
      existingItem[itemToAdd] += 1
    } else {
      const obj = {};
      obj[itemToAdd] = 1
      cartCopy.push(obj)
    }

    setCart(cartCopy)

    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart)
  }

  useEffect(() => {
    localCart = JSON.parse(localCart);
    if (localCart) setCart(localCart)
  }, [])

  return (
    <>
      <button
        className="addToCartBtn"
        onClick={addItem}>
        Add To Basket
      </button>
    </>
  );
}

export default AddToCart;
