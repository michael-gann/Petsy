import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import RemoveItemFromCart from "./RemoveItemFromCart";
import RemovePetFromCart from "./RemovePetFromCart";
import ProceedToCheckout from "./ProceedToCheckout";

import "./Cart.css";

function Cart() {
  let localItemsCart = JSON.parse(localStorage.getItem("cart"));
  let localPetsCart = JSON.parse(localStorage.getItem("petCart"));
  let [cartItems, setCartItems] = useState(
    localItemsCart ? [...localItemsCart] : []
  );
  let [petsCart, setPetsCart] = useState([]);
  let [itemCarObj, setItemCartObj] = useState({});
  const loopArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const fetchItems = () => {
    return (
      <ul className="items-container">
        {cartItems.map((item) =>
          <div className="items-container__item" key={item.id}>
            <img className="item-image" src={item.imgurl} />
            <div className="item-info-container">
              <div className="navlink">
                <NavLink to={`/items/${item.id}`}><h1>{item.name}</h1></NavLink>
              </div>
              <div className="cart-page-button-container">
                <RemoveItemFromCart item={item} setCartItems={setCartItems} />
              </div>
            </div>
            <select className="dropdown" key={item.id} onChange={e => updateQty(e)}>
              {loopArr.map(num => {
                if (itemCarObj[item.id] == num) return <option id={`${item.id}|${num}`} selected='selected' value={`${item.id}|${num}`}>Qty: {num}</option>
                else return <option id={`${item.id}|${num}`} value={`${item.id}|${num}`}>Qty: {num}</option>
              })}
            </select>
            <p>{`$${item.price}`}</p>
          </div>
        )}
      </ul>
    )
  }

  const fetchPets = () => {
    return (
      <div className="items-container">
        <ul>
          {localPetsCart !== null &&
            petsCart.map((pets) => (
              <div className="items-container__item" key={pets.id}>
                <img className="item-image" src={pets.imgurl} />
                <div className="item-info-container">

                  <NavLink to={`/pets/${pets.id}`}>
                    <h1>{pets.name}</h1>
                  </NavLink>
                  <p>{pets.description}</p>
                  <div>
                    <RemovePetFromCart item={pets} setPetsCart={setPetsCart} />
                  </div>
                </div>
                <p>{`$${pets.price}`}</p>
              </div>
            ))}
        </ul>
      </div>
    );
  };

  const updateQty = (e) => {
    let value = e.target.value.split("|")[1];
    let itemId = e.target.value.split("|")[0];
    // console.log("Value:", value)
    // console.log("Item ID:", itemId)

    let cartCopy = [...cartItems];

    let targetItem = cartCopy.find((cartItem) => {
      return cartItem.id == itemId;
    });

    let localItemCart = JSON.parse(localStorage.getItem("cart"));
    let itemIdString = targetItem.id.toString();

    localItemCart.forEach((item) => {
      if (Object.keys(item)[0] == itemIdString) {
        item[itemIdString] = parseInt(value);
        let cartObj = itemCarObj;
        cartObj[itemIdString] = parseInt(value);
        setItemCartObj(cartObj);
      }
    });

    let newCart = JSON.stringify(localItemCart);
    localStorage.setItem("cart", newCart);
  };

  useEffect(() => {
    async function fetchData() {
      let fetchedItems = [];
      let fetchedPets = [];
      if (localItemsCart) {
        localItemsCart.map(async (cartItem) => {
          const response = await fetch(`/api/items/${Object.keys(cartItem)}`);
          const itemData = await response.json();
          fetchedItems.push(itemData);
          setCartItems([...fetchedItems]);
        });
      }
      if (localPetsCart) {
        localPetsCart.map(async (cartItem) => {
          const response = await fetch(`/api/pets/${Object.keys(cartItem)}`);
          const itemData = await response.json();
          fetchedPets.push(itemData);
          setPetsCart([...fetchedPets]);
        });
      }
    }
    fetchData();

    const buildItemCartObj = () => {
      let cartObj = {};
      localItemsCart.map((item) => {
        cartObj[Object.keys(item)[0]] = Object.values(item)[0];
      });
      setItemCartObj(cartObj);
    };
    buildItemCartObj();
  }, []);

  return (
    <div className="cart-components">
      <div>
        <div className="num-cart-items">
          <h1>
            {localItemsCart ? localItemsCart.length : "0"} {localItemsCart.length > 1 ? "items" : "item"} in your cart
          </h1>
        </div>
        {fetchItems()}
        <div className="num-cart-pets">
          <h1>
            {localPetsCart ? localPetsCart.length : "0"} {localPetsCart.length > 1 ? "pets" : "pet"} in your cart
          </h1>
        </div>
        {fetchPets()}
      </div>
      <div>
        <ProceedToCheckout />
      </div>
    </div>
  );
}

export default Cart;
