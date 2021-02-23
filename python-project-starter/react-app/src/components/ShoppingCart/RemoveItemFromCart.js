import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { removeCartItem } from '../ShoppingCart/cartSlice';
import { useParams } from "react-router-dom";

function RemoveItemFromCart({ id, item }) {
  let [cart, setCart] = useState([]);
  let localCart = localStorage.getItem("cart");
  let [cartItems, setCartItems] = useState(localCart ? [...localCart] : []);

  const removeItem = (e) => {
    let cartCopy = [...cart];
    let itemToRemove = item.id;

    const newCart = cartCopy.map((item) => Object.assign(item, {}));

    let newCartCopy = newCart.filter((cartItem) => {
      for (const key in cartItem) {
        if (key !== itemToRemove.toString()) {
          return cartItem;
        }
      }
    });

    setCartItems(newCartCopy);

    let cartString = JSON.stringify(newCartCopy);
    localStorage.setItem("cart", cartString);
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
        <div className="removeFromCartBtn-div">Remove Item</div>
      </button>
    </>
  );
}

export default RemoveItemFromCart;
