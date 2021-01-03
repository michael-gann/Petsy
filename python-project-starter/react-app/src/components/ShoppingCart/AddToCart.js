import React, { useState, useEffect } from "react";

function AddToCart({ item }) {
  let [cart, setCart] = useState([]);

  let localCart = localStorage.getItem("cart");

  // console.log("localcart:", localCart)

  const addItem = () => {
    let cartCopy = [...cart];
    let itemToAdd = item.id;
    let { id } = itemToAdd;
    let existingItem = cartCopy.find((cartItem) => cartItem == id);

    if (existingItem) {
      existingItem.quantity += item.quantity; //update item
    } else {
      //if item doesn't exist, simply add it
      cartCopy.push(itemToAdd);
    }

    setCart(cartCopy);

    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart);
  };

  useEffect(() => {
    localCart = JSON.parse(localCart);
    if (localCart) setCart(localCart);
  }, []);

  return (
    <>
      <button className="addToCartBtn" onClick={addItem}>
        Add To Basket
      </button>
    </>
  );
}

export default AddToCart;
