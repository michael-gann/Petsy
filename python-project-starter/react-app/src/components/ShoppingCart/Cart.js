import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import RemoveItemFromCart from "./RemoveItemFromCart";
import RemovePetFromCart from "./RemovePetFromCart";
import ProceedToCheckout from "./ProceedToCheckout";
import NumberFormat from "react-number-format";

import "./Cart.css";

function Cart({ setNumCartItems }) {
  let [localItemsCart, setLocalItemsCart] = useState(JSON.parse(localStorage.getItem("cart")));
  // let localPetsCart = JSON.parse(localStorage.getItem("petCart"));
  let [localPetsCart, setLocalPetsCart] = useState(JSON.parse(localStorage.getItem("petCart")));
  let [cartItems, setCartItems] = useState(
    localItemsCart ? [...localItemsCart] : []
  );
  // let [petsCart, setPetsCart] = useState([]);
  let [petsCart, setPetsCart] = useState(
    localPetsCart ? [...localPetsCart] : []);
  let [itemCarObj, setItemCartObj] = useState({});
  const loopArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let total = 0;

  const handleClick = (e) => {
    updateQty(e);
  };


  const fetchItems = () => {
    return (
      <ul className="items-container">
        {cartItems &&
          cartItems.map((item) => {
            {
              let itemTotal = item.price * itemCarObj[item.id];
              total += itemTotal;
            }
            return (
              <div className="items-container__item" key={item.id}>
                <img className="item-image" src={item.imgurl} />
                <div className="item-info-container">
                  <div className="navlink">
                    <NavLink to={`/items/${item.id}`}>
                      <h1>{item.name}</h1>
                    </NavLink>
                  </div>
                  <div className="cart-page-button-container">
                    <RemoveItemFromCart
                      item={item}
                      cartItems={cartItems}
                      setCartItems={setCartItems}
                      localItemsCart={localItemsCart}
                      setLocalItemsCart={setLocalItemsCart}
                    />
                  </div>
                </div>
                <select
                  className="item-dropdown"
                  key={item.id}
                  onChange={(e) => handleClick(e)}
                >
                  {loopArr.map((num) => {
                    if (itemCarObj[item.id] == num)
                      return (
                        <option
                          id={`${item.id}|${num}`}
                          selected="selected"
                          value={`${item.id}|${num}`}
                        >
                          Qty: {num}
                        </option>
                      );
                    else
                      return (
                        <option
                          id={`${item.id}|${num}`}
                          value={`${item.id}|${num}`}
                        >
                          Qty: {num}
                        </option>
                      );
                  })}
                </select>
                <div className="number-format">
                  <NumberFormat
                    value={item.price * itemCarObj[item.id]}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                    renderText={(value) => <div>{value}</div>}
                    decimalScale={2}
                    fixedDecimalScale={true}
                  />
                </div>
              </div>
            );
          })}
      </ul>
    );
  };

  const fetchPets = () => {
    return (
      <div className="items-container">
        <ul>
          {localPetsCart &&
            petsCart.map((pets) => {
              {
                total += pets.price;
              }
              return (
                <div className="items-container__item" key={pets.id}>
                  <img className="item-image" src={pets.imgurl} />
                  <div className="item-info-container">
                    <NavLink to={`/pets/${pets.id}`}>
                      <h1>{pets.name}</h1>
                    </NavLink>
                    <p>{pets.description}</p>
                    <div>
                      <RemovePetFromCart
                        item={pets}
                        setPetsCart={setPetsCart}
                        localPetsCart={localPetsCart}
                        setLocalPetsCart={setLocalPetsCart}
                      />
                    </div>
                  </div>
                  <div className="number-format">
                    <NumberFormat
                      value={pets.price}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                      renderText={(value) => <div>{value}</div>}
                      decimalScale={2}
                      fixedDecimalScale={true}
                    />
                  </div>
                </div>
              );
            })}
        </ul>
      </div>
    );
  };

  const updateQty = (e) => {
    let value = e.target.value.split("|")[1];
    let itemId = e.target.value.split("|")[0];

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

    (() => {
      let localItemsCart = JSON.parse(localStorage.getItem("cart"));
      let localPetsCart = JSON.parse(localStorage.getItem("petCart"));
      let count = 0;
      localItemsCart.forEach((item) => {
        count += item[Object.keys(item)];
      });
      if (localPetsCart) {
        localPetsCart.forEach((item) => {
          count += item[Object.keys(item)];
        });
      }
      setNumCartItems(count);
    })();
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
      if (localItemsCart)
        localItemsCart.map((item) => {
          cartObj[Object.keys(item)[0]] = Object.values(item)[0];
        });
      setItemCartObj(cartObj);
    };
    buildItemCartObj();
  }, []);

  useEffect(() => {
    (() => {
      let localItemsCart = JSON.parse(localStorage.getItem("cart"));
      let localPetsCart = JSON.parse(localStorage.getItem("petCart"));
      let count = 0;
      if (localItemsCart)
        localItemsCart.forEach((item) => {
          count += item[Object.keys(item)];
        });
      if (localPetsCart)
        localPetsCart.forEach((item) => {
          count += item[Object.keys(item)];
        });
      setNumCartItems(count);
    })();
  }, [cartItems, petsCart]);

  return (
    <div className="cart-wrapper">
      <div className="cart-components">
        <div>
          <div className="num-cart-items">
            <h1>
              {localItemsCart ? localItemsCart.length : "0"} item(s) in your
              cart
            </h1>
          </div>
          {fetchItems()}
          <div className="num-cart-pets">
            <h1>
              {localPetsCart ? localPetsCart.length : "0"} pet(s) in your cart
            </h1>
          </div>
          {fetchPets()}
        </div>
        <ProceedToCheckout
          total={total}
          cartItems={cartItems}
          petsCart={petsCart}
          itemCarObj={itemCarObj}
          setNumCartItems={setNumCartItems}
        />
      </div>
    </div>
  );
}

export default Cart;
