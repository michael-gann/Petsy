import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function RemoveItemFromCart({ item, setCartItems }) {
  let [cart, setCart] = useState([])
  let localCart = localStorage.getItem("cart");

  const removeItem = () => {
    let cartCopy = [...cart]
    let itemToRemove = item.id.toString()


    let newCartCopy = cartCopy.filter(cartItem => {
      return Object.keys(cartItem)[0] !== itemToRemove
    });

    setCartItems(newCartCopy);

    let cartString = JSON.stringify(newCartCopy)
    localStorage.setItem('cart', cartString)
    window.location.reload(false);
  }

  useEffect(() => {
    localCart = JSON.parse(localCart);
    if (localCart) setCart(localCart);
  }, [])

  return (
    <>
      <button
        className="removeFromCartBtn"
        onClick={removeItem}>
        Remove Item
      </button>
    </>
  );
}

export default RemoveItemFromCart;
