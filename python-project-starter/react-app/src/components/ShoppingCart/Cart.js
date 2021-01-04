import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import RemoveItemFromCart from './RemoveItemFromCart';
import RemovePetFromCart from './RemovePetFromCart';
import { useHistory } from "react-router-dom";

function Cart() {
  let localItemsCart = JSON.parse(localStorage.getItem('cart'))
  let localPetsCart = JSON.parse(localStorage.getItem('petCart'))
  let [cartItems, setCartItems] = useState(localItemsCart ? [...localItemsCart] : [])
  let [petsCart, setPetsCart] = useState([])
  let [itemCarObj, setItemCartObj] = useState({})
  const loopArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]




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
              {loopArr.map(num => {
                if (itemCarObj[item.id] == num) return <option id={`${item.id}|${num}`} selected='selected' value={`${item.id}|${num}`}>Qty: {num}</option>
                else return <option id={`${item.id}|${num}`} value={`${item.id}|${num}`}>Qty: {num}</option>
              })}
              {/* <option id={`${item.id}|1`} value={`${item.id}|1`}>Qty: 1</option> */}
              {/* <option id={`${item.id}|2`} value={`${item.id}|2`}>Qty: 2</option>
              <option id={`${item.id}|3`} value={`${item.id}|3`}>Qty: 3</option>
              <option id={`${item.id}|4`} value={`${item.id}|4`}>Qty: 4</option>
              <option id={`${item.id}|5`} value={`${item.id}|5`}>Qty: 5</option>
              <option id={`${item.id}|6`} value={`${item.id}|6`}>Qty: 6</option>
              <option id={`${item.id}|7`} value={`${item.id}|7`}>Qty: 7</option>
              <option id={`${item.id}|8`} value={`${item.id}|8`}>Qty: 8</option>
              <option id={`${item.id}|9`} value={`${item.id}|9`}>Qty: 9</option>
              <option id={`${item.id}|10`} value={`${item.id}|10`}>Qty: 10</option> */}
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
                <NavLink to={`/pets/${pets.id}`}>{pets.name}</NavLink>
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
    let value = e.target.value.split("|")[1]
    let itemId = e.target.value.split("|")[0]
    // console.log("Value:", value)
    // console.log("Item ID:", itemId)

    let cartCopy = [...cartItems]

    let targetItem = cartCopy.find(cartItem => {
      return cartItem.id == itemId
    });

    let localItemCart = JSON.parse(localStorage.getItem('cart'))
    let itemIdString = targetItem.id.toString()

    localItemCart.forEach(item => {
      if (Object.keys(item)[0] == itemIdString) {
        item[itemIdString] = parseInt(value)
        let cartObj = itemCarObj
        cartObj[itemIdString] = parseInt(value)
        setItemCartObj(cartObj)
      }
    })

    let newCart = JSON.stringify(localItemCart)
    localStorage.setItem('cart', newCart)
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

    const buildItemCartObj = () => {
      let cartObj = {}
      localItemsCart.map(item => {
        cartObj[Object.keys(item)[0]] = Object.values(item)[0]
      })
      setItemCartObj(cartObj)
    }
    buildItemCartObj()
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
