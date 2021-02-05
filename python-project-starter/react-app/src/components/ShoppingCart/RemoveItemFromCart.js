import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function RemoveItemFromCart({ id, item }) {
  let [cart, setCart] = useState([]);
  let localCart = localStorage.getItem("cart");
  let [cartItems, setCartItems] = useState(localCart ? [...localCart] : []);

  const removeItem = (e) => {
    // e.preventDefault();
    let cartCopy = [...cart];
    let itemToRemove = item.id;

    const newCart = cartCopy.map((item) => Object.assign(item, {}));

    console.log(newCart);

    let newCartCopy = newCart.filter((cartItem) => {
      for (const key in cartItem) {
        console.log(key, itemToRemove);
        if (key !== itemToRemove.toString()) {
          return cartItem;
        }
      }
    });

    console.log(newCartCopy);

    setCartItems(newCartCopy);

    let cartString = JSON.stringify(newCartCopy);
    localStorage.setItem("cart", cartString);
    // window.location.reload(false);
  };

  useEffect(() => {
    localCart = JSON.parse(localCart);
    if (localCart) {
      setCart(localCart);
    }
  }, []);

  return (
    <>
      <button className="removeFromCartBtn" onClick={removeItem}>
        <div className="removeFromCartBtn-div">
          Remove Item
        </div>
      </button>
    </>
  );
}

export default RemoveItemFromCart;
