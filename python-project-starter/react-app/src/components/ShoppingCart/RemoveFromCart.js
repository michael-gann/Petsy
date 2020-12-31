import React, { useState, useEffect } from "react";

function RemoveFromCart(id) {
  let [cart, setCart] = useState([])

  let localCart = localStorage.getItem("cart");

  const removeItem = () => {
    let cartCopy = [...cart]
    let itemID = id

    console.log("itemID", itemID)

    cartCopy = cartCopy.filter(item => item != itemID.id);

    setCart(cartCopy);

    let cartString = JSON.stringify(cartCopy)
    localStorage.setItem('cart', cartString)
  }

  useEffect(() => {
    localCart = JSON.parse(localCart);
    if (localCart) setCart(localCart)
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

export default RemoveFromCart;
