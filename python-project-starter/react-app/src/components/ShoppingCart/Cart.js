import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import RemoveItemFromCart from './RemoveItemFromCart';
import RemovePetFromCart from './RemovePetFromCart';
import ProceedToCheckout from './ProceedToCheckout';

import './Cart.css';

function Cart() {
  let localItemsCart = JSON.parse(localStorage.getItem('cart'))
  let localPetsCart = JSON.parse(localStorage.getItem('petCart'))
  let [cartItems, setCartItems] = useState(localItemsCart || [])
  let [cart, setCart] = useState([])
  let [petsCart, setPetsCart] = useState([])

  useEffect(() => {
    console.log(cartItems)
  }, [])

  console.log(localItemsCart)

  const fetchItems = () => {
    return (
      <div className="items-container">
        <ul>
          {cartItems.map((item) =>
            <div className="items-container__item" key={item.id}>
              <div className="item-image">
                <img src={item.imgurl} />
              </div>
              <div className="item-info-container">
                <NavLink to={`/items/${item.id}`}><h2>{item.name}</h2></NavLink>
                <div>
                  <RemoveItemFromCart item={item} setCartItems={setCartItems} />
                </div>
              </div>
              <select className="dropdown" key={item.id} onChange={e => updateQty(e)}>
                <option value="1">Qty: 1</option>
                <option value="2">Qty: 2</option>
                <option value="3">Qty: 3</option>
                <option value="4">Qty: 4</option>
                <option value="5">Qty: 5</option>
                <option value="6">Qty: 6</option>
                <option value="7">Qty: 7</option>
                <option value="8">Qty: 8</option>
                <option value="9">Qty: 9</option>
                <option value="10">Qty: 10</option>
              </select>
              <h6>{`$${item.price}`}</h6>
            </div>
          )}
        </ul>
      </div>
    )
  }

  const fetchPets = () => {
    return (
      <div className="items-container">
        <ul>
          {localPetsCart !== null &&
            petsCart.map((pets) =>
              <div className="items-container__item" key={pets.id}>
                <img src={pets.imgurl} />
                <div className="item-info-container">
                  <NavLink to={`/pets/${pets.id}`}><h1>{pets.name}</h1></NavLink>
                  <p>{pets.description}</p>
                  <div>
                    <RemovePetFromCart item={pets} setPetsCart={setPetsCart} />
                  </div>
                </div>
                <h6>{`$${pets.price}`}</h6>
              </div>
            )}
        </ul>
      </div>
    )
  }

  const updateQty = (e) => {
    let cartCopy = [...cartItems]

    let targetItem = cartCopy.find(cartItem => {
      return cartItem.id == e.target.value
    });

    // targetItem[e.target.name.toString()] = e.target.value

    // setCart(cartCopy);

    // let cartString = JSON.stringify(cartCopy);
    // localStorage.setItem('cart', cartString);
  }

  useEffect(() => {
    async function fetchData() {
      let fetchedItems = []
      let fetchedPets = []
      if (localItemsCart) {
        localItemsCart.map(async (cartItem) => {
          const response = await fetch(`/api/items/${(Object.keys(cartItem))}`);
          const itemData = await response.json();
          fetchedItems.push(itemData)
          setCartItems([...fetchedItems])
        })
      }
      if (localPetsCart) {
        localPetsCart.map(async (cartItem) => {
          const response = await fetch(`/api/pets/${(Object.keys(cartItem))}`);
          const itemData = await response.json();
          fetchedPets.push(itemData)
          setPetsCart([...fetchedPets])
        })
      }
    }
    fetchData();
  }, []);



  return (
    <div className="cart-components">
      <div>
        <div className="num-cart-items">
          <h1>{localItemsCart ?
            localItemsCart.length :
            "0"} items in your cart</h1>
        </div>
        {fetchItems()}
        <div className="num-cart-pets">
          <h1>{localPetsCart ?
            localPetsCart.length :
            "0"} pets in your cart</h1>
        </div>
        {fetchPets()}
      </div>
      <div>
        <ProceedToCheckout />
      </div>
    </div>
  )
}

export default Cart
