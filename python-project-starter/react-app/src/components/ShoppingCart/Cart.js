import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import RemoveItemFromCart from './RemoveItemFromCart';
import RemovePetFromCart from './RemovePetFromCart';
import { useHistory } from "react-router-dom";

function Cart() {
  let localItemsCart = JSON.parse(localStorage.getItem('cart'))
  let localPetsCart = JSON.parse(localStorage.getItem('petCart'))
  let [cartItems, setCartItems] = useState(localItemsCart || [])
  let [cart, setCart] = useState([])
  let [petsCart, setPetsCart] = useState([])
  const history = useHistory();

  const fetchItems = () => {
    return (
      <ul>
        {cartItems.map((item) =>
          <div key={item.id}>
            <img src={item.imgurl} />
            <div>
              <NavLink to={`/items/${item.id}`}>{item.name}</NavLink>
              <p>{`$${item.price}`}</p>
            </div>
            <select key={item.id} onChange={e => updateQty(e)}>
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
            <div>
              <RemoveItemFromCart item={item} setCartItems={setCartItems} />
            </div>
          </div>
        )}
      </ul>
    )
  }

  const fetchPets = () => {
    return (
      <ul>
        {localPetsCart !== null &&
          petsCart.map((pets) =>
            <div key={pets.id}>
              <img src={pets.imgurl} />
              <div>
                <NavLink to={`/petss/${pets.id}`}>{pets.name}</NavLink>
                <p>{`$${pets.price}`}</p>
              </div>
              <div>
                <RemovePetFromCart item={pets} setPetsCart={setPetsCart} />
              </div>
            </div>
          )}
      </ul>
    )
  }

  const updateQty = (e) => {
    let cartCopy = [...cartItems]

    console.log("cartCopy", cartCopy)

    let targetItem = cartCopy.find(cartItem => {
      return Object.keys(cartItem) == e.target.name
    });

    targetItem[e.target.name.toString()] = e.target.value

    setCart(cartCopy);

    let cartString = JSON.stringify(cartCopy);
    localStorage.setItem('cart', cartString);
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
    <>
      <div>
        <h1>{localItemsCart ?
          localItemsCart.length :
          "0"} items in your cart</h1>
      </div>
      {fetchItems()}
      <div>
        <h1>{localPetsCart ?
          localPetsCart.length :
          "0"} pets in your cart</h1>
      </div>
      {fetchPets()}
    </>
  )
}

export default Cart
