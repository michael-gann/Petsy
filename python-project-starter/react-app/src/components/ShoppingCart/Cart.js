import React, { useState, useEffect } from 'react';
import RemoveFromCart from './RemoveFromCart';

function Cart() {
  let [cartItems, setCartItems] = useState([])
  let localCart = JSON.parse(localStorage.getItem('cart'))

  useEffect(() => {
    async function fetchData() {
      let fetchedItems = []
      if (localCart) {
        localCart.map(async (id) => {
          const response = await fetch(`/api/items/${id}`);
          const itemData = await response.json();
          fetchedItems.push(itemData)
          setCartItems([...fetchedItems])
        })
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>{localCart.length} items in your cart</h1>
      </div>
      <ul>
        {cartItems.map((item) =>
          <div>
            <img src={item.imgurl} />
            <div>
              <h3>{item.name}</h3>
              <p>{`$${item.price}`}</p>
              <RemoveFromCart />
            </div>
          </div>
        )}
      </ul>
    </>
  )
}

export default Cart
