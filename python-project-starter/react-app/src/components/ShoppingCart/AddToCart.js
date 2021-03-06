import React, { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";

function AddToCart({ item }) {
  let [cart, setCart] = useState([]);
  const history = useHistory();

  let localCart = localStorage.getItem("cart");

  const addItem = (e) => {
    e.preventDefault();
    let cartCopy = [...cart];
    let itemToAdd = item.id;

    let existingItem = cartCopy.find((cartItem) => {
      return Object.keys(cartItem) == itemToAdd.toString();
    });

    if (existingItem) {
      existingItem[itemToAdd] += 1;
    } else {
      const obj = {};
      obj[itemToAdd] = 1;
      cartCopy.push(obj);
    }

    setCart(cartCopy);

    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart);
    return history.push("/cart");
  };

  useEffect(() => {
    localCart = JSON.parse(localCart);
    if (localCart) {
      setCart(localCart);
    }
  }, []);

  return (
    <>
      <button className="addToCartBtn" onClick={addItem}>
        Add To Cart
      </button>
    </>
  );
}

export default AddToCart;
